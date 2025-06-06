import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AllPosts = () => {
  const posts = [
    {
      title: "7 Best Passive Income Ideas in Canada (2025 Edition)",
      excerpt: "Want to grow your wealth while you sleep? Discover 7 beginner-friendly, proven passive income strategies that work in Canada.",
      readTime: "15 min read",
      category: "Passive Income",
      date: "Dec 6, 2024",
      link: "/blog/7-best-passive-income-ideas-canada-2025",
      featured: true
    },
    {
      title: "TFSA vs RRSP: Which is Better for Passive Income?",
      excerpt: "A comprehensive comparison of Canada's top tax-advantaged accounts for building wealth and maximizing your investment returns.",
      readTime: "8 min read",
      category: "Tax Strategy",
      date: "Dec 5, 2024",
      link: "/blog/tfsa-vs-rrsp-passive-income",
      featured: false
    },
    {
      title: "Top 10 Canadian Dividend Stocks for 2024",
      excerpt: "Discover reliable dividend-paying stocks that have consistently rewarded Canadian investors with steady passive income.",
      readTime: "12 min read",
      category: "Investing",
      date: "Dec 3, 2024",
      link: "/blog/top-canadian-dividend-stocks-2024",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <Link to="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              All Blog Posts
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Explore our complete collection of passive income strategies, investment tips, and wealth-building guides for Canadians.
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card key={index} className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg ${post.featured ? 'md:col-span-2 lg:col-span-2' : ''}`}>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Badge 
                      variant="secondary" 
                      className={
                        post.category === "Passive Income" ? "bg-green-100 text-green-800" :
                        post.category === "Tax Strategy" ? "bg-blue-100 text-blue-800" :
                        "bg-purple-100 text-purple-800"
                      }
                    >
                      {post.category}
                    </Badge>
                    {post.featured && (
                      <Badge className="bg-yellow-100 text-yellow-800">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center text-sm text-slate-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                </div>
                <CardTitle className={`group-hover:text-blue-600 transition-colors line-clamp-2 ${post.featured ? 'text-2xl' : 'text-xl'}`}>
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className={`mb-4 line-clamp-3 ${post.featured ? 'text-lg' : 'text-base'}`}>
                  {post.excerpt}
                </CardDescription>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500 flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </span>
                  <Link to={post.link}>
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 p-0">
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">More Coming Soon!</h2>
          <p className="text-xl text-slate-600 mb-8">
            We're constantly adding new content to help you build passive income in Canada.
          </p>
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">📧 Never Miss a Post</h3>
            <p className="text-slate-600 mb-6">
              Subscribe to our newsletter and get the latest passive income strategies delivered to your inbox every week.
            </p>
            <Link to="/">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-lg">
                Subscribe Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPosts;