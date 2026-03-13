"use client";

import { Heart, MessageCircle, Share2, Send, TrendingUp, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import apiClient from "@/lib/api";
import { useAuth } from "@/context/AuthContext";

export default function CommunityPage() {
  const { user, isAuthenticated } = useAuth();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [newPostContent, setNewPostContent] = useState("");
  const [likedPosts, setLikedPosts] = useState(new Set());
  const [postComments, setPostComments] = useState({});

  const trendingTopics = [
    { name: "Dog Care", growth: "+5%", posts: "12.5k" },
    { name: "Cat Care", growth: "+3%", posts: "8.3k" },
    { name: "Pet Nutrition", growth: "+8%", posts: "6.2k" },
    { name: "Training Tips", growth: "+2%", posts: "9.1k" },
    { name: "Adoption Stories", growth: "+12%", posts: "5.7k" },
    { name: "Health & Wellness", growth: "+4%", posts: "11.2k" },
  ];

  useEffect(() => {
    loadFeed();
  }, []);

  const loadFeed = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await apiClient.getCommunityFeed(20, 0);
      setPosts(Array.isArray(response.data) ? response.data : response.data?.posts || []);
    } catch (err) {
      console.error("Error loading feed:", err);
      setError("Failed to load community feed");
      // Fallback to mock data for demo
      setPosts([
        {
          id: 1,
          userId: "user1",
          user: { name: "Sneha Reddy", photo: null },
          content: "Just adopted a rescue puppy! Any tips for first-time dog parents? He's 3 months old and super energetic 🐕",
          createdAt: new Date(Date.now() - 2 * 3600000).toISOString(),
          likes: 24,
          comments: 12,
        },
        {
          id: 2,
          userId: "user2",
          user: { name: "Amit Joshi", photo: null },
          content: "My cat has been acting strange lately – not eating much. Should I be worried? Has anyone experienced this?",
          createdAt: new Date(Date.now() - 5 * 3600000).toISOString(),
          likes: 18,
          comments: 23,
        },
        {
          id: 3,
          userId: "user3",
          user: { name: "Divya Nair", photo: null },
          content: "Best dog-friendly cafes in Bangalore? Planning to take my golden retriever out this weekend!",
          createdAt: new Date(Date.now() - 24 * 3600000).toISOString(),
          likes: 31,
          comments: 14,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleCreatePost = async () => {
    if (!isAuthenticated) {
      setError("Please login to create a post");
      return;
    }

    if (!newPostContent.trim()) {
      setError("Post content cannot be empty");
      return;
    }

    try {
      await apiClient.createCommunityPost({
        content: newPostContent,
        imageUrl: null,
      });
      setNewPostContent("");
      setError("");
      loadFeed();
    } catch (err) {
      console.error("Error creating post:", err);
      setError("Failed to create post. Please try again.");
    }
  };

  const handleLikePost = async (postId) => {
    if (!isAuthenticated) {
      setError("Please login to like posts");
      return;
    }

    try {
      await apiClient.likePost(postId);
      const newLiked = new Set(likedPosts);
      if (newLiked.has(postId)) {
        newLiked.delete(postId);
      } else {
        newLiked.add(postId);
      }
      setLikedPosts(newLiked);
    } catch (err) {
      console.error("Error liking post:", err);
    }
  };

  const formatTimeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);

    if (seconds < 60) return "just now";
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
    return `${Math.floor(seconds / 86400)}d ago`;
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      
      {/* HERO */}
      <div className="bg-[url('/herosection.png')] bg-cover bg-center py-32 text-center">
        <p className="text-xs tracking-widest font-bold text-orange-100 font-semibold">
          CONNECT & SHARE
        </p>

        <h1 className="text-4xl font-bold text-orange-100 mt-3">
          Pet Parent Community
        </h1>

        <p className="text-orange-100 mt-2">
          Connect, share, and learn from fellow pet parents
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-3 gap-8">
        

        {/* LEFT SIDE */}
        <div className="col-span-2 space-y-6">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          {/* CREATE POST */}
          {isAuthenticated && (
            <div className="bg-white p-5 rounded-xl shadow-sm border">
              <div className="flex items-start gap-4">

                <div className="w-10 h-10 rounded-full bg-orange-400 flex items-center justify-center text-white font-semibold">
                  {user?.name?.charAt(0)?.toUpperCase() || "U"}
                </div>

                <div className="flex-1 space-y-3">
                  <textarea
                    value={newPostContent}
                    onChange={(e) => setNewPostContent(e.target.value)}
                    rows={3}
                    placeholder="Share your thoughts, questions, or stories about your pet..."
                    className="w-full bg-gray-100 rounded-lg px-4 py-3 outline-none text-sm font-inter"
                  />

                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>
                      Share tips, ask questions, or celebrate your pet moments!
                    </span>

                    <button 
                      onClick={handleCreatePost}
                      className="flex items-center gap-2 bg-orange-400 hover:bg-orange-500 text-white text-sm px-4 py-2 rounded-lg transition-colors"
                    >
                      <Send size={16} />
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* POSTS */}
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="animate-spin text-orange-400" size={32} />
            </div>
          ) : posts.length === 0 ? (
            <div className="bg-white p-8 rounded-xl shadow-sm border text-center text-gray-600">
              No posts yet. Be the first to share something!
            </div>
          ) : (
            posts.map((post) => (
              <div
                key={post.id}
                className="bg-white p-5 rounded-xl shadow-sm border space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 bg-gradient-to-br from-orange-400 to-orange-600 text-white rounded-full flex items-center justify-center text-sm font-semibold"
                  >
                    {post.user?.name?.charAt(0)?.toUpperCase() || "U"}
                  </div>

                  <div className="text-sm">
                    <p className="font-semibold text-gray-800">{post.user?.name || "Community User"}</p>
                    <p className="text-gray-400 text-xs">{formatTimeAgo(post.createdAt)}</p>
                  </div>
                </div>

                <p className="text-gray-700 text-sm">{post.content}</p>

                {post.imageUrl && (
                  <img 
                    src={post.imageUrl} 
                    alt="Post" 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                )}

                <div className="flex gap-6 text-gray-500 text-sm pt-2 border-t">
                  <button 
                    onClick={() => handleLikePost(post.id)}
                    className={`flex items-center gap-2 transition-colors ${
                      likedPosts.has(post.id) ? "text-red-500" : "hover:text-red-500"
                    }`}
                  >
                    <Heart size={16} fill={likedPosts.has(post.id) ? "currentColor" : "none"} /> 
                    {post.likes || 0}
                  </button>

                  <button className="flex items-center gap-2 hover:text-blue-500">
                    <MessageCircle size={16} /> {post.comments || 0}
                  </button>

                  <button className="flex items-center gap-2 hover:text-gray-700">
                    <Share2 size={16} /> Share
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-6">

          {/* POPULAR TOPICS */}
          <div className="bg-white rounded-xl p-5 shadow-sm border">
            <div className="flex items-center gap-2 font-semibold text-gray-800 mb-4">
              <TrendingUp size={16} />
              Popular Topics
            </div>

            <div className="space-y-4">
              {trendingTopics.map((topic, i) => (
                <div key={i} className="flex justify-between text-sm">
                  <div>
                    <p className="font-medium text-gray-800">{topic.name}</p>
                  </div>

                  <div className="text-right">
                    <p className="text-green-500 text-xs">{topic.growth}</p>
                    <p className="text-gray-400 text-xs">{topic.posts}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* COMMUNITY GUIDELINES */}
          <div className="bg-white rounded-xl p-5 shadow-sm border">
            <h3 className="font-semibold text-gray-800 mb-3">
              Community Guidelines
            </h3>

            <ul className="text-sm text-gray-600 space-y-2 list-disc pl-4">
              <li>Be respectful and kind to all members</li>
              <li>Share accurate pet care information</li>
              <li>No spam or promotional content</li>
              <li>Seek professional help for emergencies</li>
              <li>Celebrate all kinds of pets!</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}