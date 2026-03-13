// API service for backend communication
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

class APIClient {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  // Get token from localStorage
  getToken() {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('authToken');
    }
    return null;
  }

  // Set token in localStorage
  setToken(token) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('authToken', token);
    }
  }

  // Remove token from localStorage
  clearToken() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
    }
  }

  // Get user from localStorage
  getUser() {
    if (typeof window !== 'undefined') {
      const user = localStorage.getItem('user');
      return user ? JSON.parse(user) : null;
    }
    return null;
  }

  // Set user in localStorage
  setUser(user) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('user', JSON.stringify(user));
    }
  }

  // Generic fetch wrapper
  async request(endpoint, options = {}) {
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    const token = this.getToken();
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    try {
      const url = `${this.baseURL}${endpoint}`;
      // debug helper: log the full URL so we can diagnose 404s easily
      if (process.env.NODE_ENV === 'development') {
        console.debug('[API] request to', url);
      }

      const response = await fetch(url, {
        ...options,
        headers,
      });

      const text = await response.text();
      let data;
      const contentType = response.headers.get('content-type') || '';

      // attempt to parse JSON when appropriate
      if (contentType.includes('application/json')) {
        try {
          data = JSON.parse(text);
        } catch (parseErr) {
          console.warn('Failed to parse JSON response', parseErr);
          data = text;
        }
      } else {
        data = text;
      }

      if (!response.ok) {
        // Provide extra guidance for 404s which often mean wrong baseURL
        if (response.status === 404) {
          const hint = url.startsWith(window.location.origin)
            ? 'Request appears to be hitting the frontend instead of the backend. Check NEXT_PUBLIC_API_URL and ensure the backend is running.'
            : '';
          throw new Error(`404 Not Found${hint ? ' - ' + hint : ''}`);
        }

        // when we don't have structured JSON, include raw text in the error
        const message = data && data.message ? data.message : text || 'An error occurred';
        throw new Error(message);
      }

      return data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // ==================== AUTH ENDPOINTS ====================
  async signup(userData) {
    const response = await this.request('/accounts/signup', {
      method: 'POST',
      body: JSON.stringify(userData),
    });

    if (response.token) {
      this.setToken(response.token);
      this.setUser(response.user);
    }
    return response;
  }

  async login(email, password) {
    const response = await this.request('/accounts/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });

    if (response.token) {
      this.setToken(response.token);
      this.setUser(response.data);
    }
    return response;
  }

  async googleLogin(role = 'USER') {
    // Redirect to backend Google OAuth
    window.location.href = `${this.baseURL}/accounts/google?role=${role}`;
  }

  async logout() {
    this.clearToken();
  }

  // ==================== USER ENDPOINTS ====================
  async getProfile() {
    return this.request('/users/get-profile', { method: 'GET' });
  }

  async updateProfile(profileData) {
    return this.request('/users/update-profile', {
      method: 'PUT',
      body: JSON.stringify(profileData),
    });
  }

  async setPassword(password) {
    return this.request('/users/set-password', {
      method: 'POST',
      body: JSON.stringify({ password }),
    });
  }

  async deleteProfile() {
    return this.request('/users/delete-profile', { method: 'DELETE' });
  }

  // ==================== PET ENDPOINTS ====================
  async addPet(petData) {
    return this.request('/user/pets/addpets', {
      method: 'POST',
      body: JSON.stringify(petData),
    });
  }

  async getPets() {
    return this.request('/user/pets/getpets', { method: 'GET' });
  }

  async getPet(petId) {
    return this.request(`/user/pets/getpet/${petId}`, { method: 'GET' });
  }

  async updatePet(petId, petData) {
    return this.request(`/user/pets/update-pet/${petId}`, {
      method: 'PUT',
      body: JSON.stringify(petData),
    });
  }

  async deletePet(petId) {
    return this.request(`/user/pets/delete-pet/${petId}`, { method: 'DELETE' });
  }

  // ==================== GROOMER ENDPOINTS ====================
  async getAllGroomers() {
    return this.request('/groomers', { method: 'GET' });
  }

  async getGroomerById(groomerId) {
    return this.request(`/groomers/${groomerId}`, { method: 'GET' });
  }

  async createGroomerProfile(groomerData) {
    return this.request('/groomers/onboard', {
      method: 'POST',
      body: JSON.stringify(groomerData),
    });
  }

  async getGroomerProfile() {
    return this.request('/groomers/profile/me', { method: 'GET' });
  }

  async updateGroomerProfile(groomerData) {
    return this.request('/groomers/profile', {
      method: 'PUT',
      body: JSON.stringify(groomerData),
    });
  }

  async uploadGroomerDocument(documentData) {
    return this.request('/groomers/documents/upload', {
      method: 'POST',
      body: JSON.stringify(documentData),
    });
  }

  async getGroomerDocuments() {
    return this.request('/groomers/documents/list', { method: 'GET' });
  }

  // ==================== GROOMER SERVICES ENDPOINTS ====================
  async addServiceToGroomer(serviceData) {
    return this.request('/groomers/services/add', {
      method: 'POST',
      body: JSON.stringify(serviceData),
    });
  }

  async updateServicePrice(serviceId, priceData) {
    return this.request(`/groomers/services/${serviceId}/pricing`, {
      method: 'PUT',
      body: JSON.stringify(priceData),
    });
  }

  async getGroomerServices() {
    return this.request('/groomers/services/list', { method: 'GET' });
  }

  async removeServiceFromGroomer(groomerServiceId) {
    return this.request(`/groomers/services/${groomerServiceId}`, {
      method: 'DELETE',
    });
  }

  // ==================== AVAILABILITY ENDPOINTS ====================
  async setAvailability(availabilityData) {
    return this.request('/groomers/availability/set', {
      method: 'POST',
      body: JSON.stringify(availabilityData),
    });
  }

  async getAvailability() {
    return this.request('/groomers/availability/list', { method: 'GET' });
  }

  async updateAvailability(availabilityId, availabilityData) {
    return this.request(`/groomers/availability/${availabilityId}`, {
      method: 'PUT',
      body: JSON.stringify(availabilityData),
    });
  }

  async deleteAvailability(availabilityId) {
    return this.request(`/groomers/availability/${availabilityId}`, {
      method: 'DELETE',
    });
  }

  // ==================== GROOMER BOOKINGS & WALLET ====================
  async getGroomerBookings() {
    return this.request('/groomers/bookings/list', { method: 'GET' });
  }

  async getGroomerWallet() {
    return this.request('/groomers/wallet', { method: 'GET' });
  }

  async getGroomerPayouts() {
    return this.request('/groomers/payouts/list', { method: 'GET' });
  }

  async requestPayout(payoutData) {
    return this.request('/groomers/payouts/request', {
      method: 'POST',
      body: JSON.stringify(payoutData),
    });
  }

  // ==================== SERVICE ENDPOINTS ====================
  async getAllServices() {
    return this.request('/services/getall', { method: 'GET' });
  }

  async getService(serviceId) {
    return this.request(`/services/get/${serviceId}`, { method: 'GET' });
  }

  async createService(serviceData) {
    return this.request('/services/create', {
      method: 'POST',
      body: JSON.stringify(serviceData),
    });
  }

  async updateService(serviceId, serviceData) {
    return this.request(`/services/update/${serviceId}`, {
      method: 'PATCH',
      body: JSON.stringify(serviceData),
    });
  }

  async toggleServiceStatus(serviceId) {
    return this.request(`/services/${serviceId}/status`, {
      method: 'PATCH',
    });
  }

  async deleteService(serviceId) {
    return this.request(`/services/delete/${serviceId}`, { method: 'DELETE' });
  }

  // ==================== SEARCH ENDPOINTS ====================
  async searchServices(query) {
    return this.request(`/search/services?q=${query}`, { method: 'GET' });
  }

  async searchGroomers(query) {
    return this.request(`/search/groomers?q=${query}`, { method: 'GET' });
  }

  // ==================== BOOKING ENDPOINTS ====================
  async createBooking(bookingData) {
    return this.request('/booking/create-booking', {
      method: 'POST',
      body: JSON.stringify(bookingData),
    });
  }

  async updateBooking(bookingId, bookingData) {
    return this.request(`/booking/update/${bookingId}`, {
      method: 'PATCH',
      body: JSON.stringify(bookingData),
    });
  }

  async cancelBooking(bookingId) {
    return this.request(`/booking/cancel/${bookingId}`, {
      method: 'PATCH',
    });
  }

  async getBookingsByPet(petId) {
    return this.request(`/booking/pet/${petId}`, { method: 'GET' });
  }

  async getMyBookings() {
    return this.request('/booking/my', { method: 'GET' });
  }

  // ==================== COMMUNITY ENDPOINTS ====================
  async createCommunityPost(postData) {
    return this.request('/community/post', {
      method: 'POST',
      body: JSON.stringify(postData),
    });
  }

  async updateCommunityPost(postId, postData) {
    return this.request(`/community/post/${postId}`, {
      method: 'PATCH',
      body: JSON.stringify(postData),
    });
  }

  async getCommunityFeed(limit = 10, offset = 0) {
    return this.request(`/community/feed?limit=${limit}&offset=${offset}`, {
      method: 'GET',
    });
  }

  async getTrendingFeed(limit = 10) {
    return this.request(`/community/feed/trending?limit=${limit}`, {
      method: 'GET',
    });
  }

  async likePost(postId) {
    return this.request(`/community/post/${postId}/like`, {
      method: 'POST',
    });
  }

  async commentPost(postId, commentData) {
    return this.request(`/community/post/${postId}/comment`, {
      method: 'POST',
      body: JSON.stringify(commentData),
    });
  }

  async replyToComment(commentId, replyData) {
    return this.request(`/community/comment/${commentId}/reply`, {
      method: 'POST',
      body: JSON.stringify(replyData),
    });
  }

  async bookmarkPost(postId) {
    return this.request(`/community/post/${postId}/bookmark`, {
      method: 'POST',
    });
  }

  async followUser(userId) {
    return this.request(`/community/follow/${userId}`, {
      method: 'POST',
    });
  }

  // ==================== NOTIFICATION ENDPOINTS ====================
  async getNotifications() {
    return this.request('/notifications', { method: 'GET' });
  }

  async markNotificationRead(notificationId) {
    return this.request(`/notifications/${notificationId}/read`, {
      method: 'PATCH',
    });
  }

  async markAllNotificationsRead() {
    return this.request('/notifications/read-all', {
      method: 'PATCH',
    });
  }
}

// Export singleton instance
export const apiClient = new APIClient();
export default apiClient;
