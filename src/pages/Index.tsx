import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, TrendingUp, Shield, DollarSign, Star, Calendar, User, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleEmailSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }
    
    // Here you would integrate with your email marketing platform
    console.log('Email signup:', email);
    toast({
      title: "Success!",
      description: "Thanks for subscribing! Check your email for confirmation.",
    });
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-green-100 text-green-800 border-green-200 hover:bg-green-200 transition-colors">
            🍁 Made for Canadians
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight">
            Build Passive Income
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              in Canada
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Learn proven strategies to grow your wealth with Canadian-friendly investments, 
            tax-advantaged accounts, and dividend-paying stocks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/blog">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/blog">
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg rounded-xl border-2 border-slate-300 hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
                Read Latest Posts
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Latest Insights</h2>
            <p className="text-xl text-slate-600">Fresh strategies and tips to boost your passive income</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "7 Best Passive Income Ideas in Canada (2025 Edition)",
                excerpt: "Want to grow your wealth while you sleep? Discover 7 beginner-friendly, proven passive income strategies that work in Canada.",
                readTime: "15 min read",
                category: "Passive Income",
                date: "Dec 6, 2024",
                link: "/blog/7-best-passive-income-ideas-canada-2025"
              },
              {
                title: "TFSA vs RRSP: Which is Better for Passive Income?",
                excerpt: "A comprehensive comparison of Canada's top tax-advantaged accounts for building wealth.",
                readTime: "8 min read",
                category: "Tax Strategy",
                date: "Dec 5, 2024",
                link: "/blog/tfsa-vs-rrsp-passive-income"
              },
              {
                title: "Top 10 Canadian Dividend Stocks for 2024",
                excerpt: "Discover reliable dividend-paying stocks that have consistently rewarded Canadian investors.",
                readTime: "12 min read",
                category: "Investing",
                date: "Dec 3, 2024",
                link: "/blog/top-canadian-dividend-stocks-2024"
              }
            ].map((post, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className={
                      post.category === "Passive Income" ? "bg-green-100 text-green-800" :
                      post.category === "Tax Strategy" ? "bg-blue-100 text-blue-800" :
                      "bg-purple-100 text-purple-800"
                    }>
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-sm text-slate-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4 line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500 flex items-center">
                      <User className="h-4 w-4 mr-1" />
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
          
          {/* View All Posts Button */}
          <div className="text-center mt-12">
            <Link to="/blog">
              <Button size="lg" variant="outline" className="px-8 py-3 text-lg rounded-xl border-2 border-blue-500 text-blue-600 hover:bg-blue-50 transition-all duration-300">
                View All Posts
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Start Here Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-8">New to Passive Income? Start Here</h2>
          <p className="text-xl mb-12 opacity-90">
            Follow these simple steps to begin your passive income journey in Canada
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Open a Brokerage Account",
                description: "Start with Wealthsimple or Questrade to access Canadian markets with low fees."
              },
              {
                step: "2",
                title: "Maximize Your TFSA",
                description: "Use your Tax-Free Savings Account to grow investments without paying taxes on gains."
              },
              {
                step: "3",
                title: "Build Your Portfolio",
                description: "Invest in Canadian dividend stocks, ETFs, and REITs for steady passive income."
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="opacity-90">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Tools */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Top Tools We Recommend</h2>
            <p className="text-xl text-slate-600">Trusted platforms to kickstart your passive income journey</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Wealthsimple",
                description: "Canada's leading robo-advisor with automatic investing and low fees.",
                features: ["$0 commission trades", "Auto-rebalancing", "Tax-loss harvesting"],
                rating: 4.8,
                cta: "Start Investing",
                badge: "Most Popular",
                affiliateLink: "https://wealthsimple.com/invite/your-affiliate-code",
                logo: "💰"
              },
              {
                name: "Questrade",
                description: "Self-directed investing platform perfect for DIY Canadian investors.",
                features: ["Free ETF purchases", "Advanced tools", "Low margin rates"],
                rating: 4.6,
                cta: "Open Account",
                badge: "Best for DIY",
                affiliateLink: "https://questrade.com/promo/your-affiliate-code",
                logo: "📈"
              },
              {
                name: "Neo Financial",
                description: "Modern banking with high-interest savings and cashback rewards.",
                features: ["High-interest savings", "No monthly fees", "Cashback rewards"],
                rating: 4.7,
                cta: "Get Started",
                badge: "Best Savings",
                affiliateLink: "https://neofinancial.com/referral/your-affiliate-code",
                logo: "🏦"
              }
            ].map((tool, index) => (
              <Card key={index} className="relative group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border-0 shadow-lg overflow-hidden">
                {tool.badge && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-green-500 text-white">
                      {tool.badge}
                    </Badge>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{tool.logo}</span>
                    <CardTitle className="text-2xl text-slate-900">{tool.name}</CardTitle>
                  </div>
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(tool.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-slate-600">{tool.rating}</span>
                  </div>
                  <CardDescription className="text-base">{tool.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {tool.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href={tool.affiliateLink} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-lg font-semibold transition-all duration-300">
                      {tool.cta}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Email Signup */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <TrendingUp className="h-16 w-16 text-green-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-4">Get Passive Income Tips Weekly</h2>
            <p className="text-xl text-slate-300 mb-8">
              Join 15,000+ Canadians who get our best passive income strategies delivered to their inbox every week.
            </p>
          </div>
          <form onSubmit={handleEmailSignup} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 py-3 px-4 text-lg rounded-lg border-slate-600 bg-slate-800 text-white placeholder-slate-400 focus:border-green-400"
              required
            />
            <Button 
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Subscribe
            </Button>
          </form>
          <p className="text-sm text-slate-400 mt-4">
            No spam. Unsubscribe anytime. 🍁 Canadian content only.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;