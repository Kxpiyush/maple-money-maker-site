
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Clock, User, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPost = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link to="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <Badge className="bg-green-100 text-green-800">
              Passive Income
            </Badge>
            <div className="flex items-center text-sm text-slate-600">
              <Calendar className="h-4 w-4 mr-1" />
              Dec 6, 2024
            </div>
            <div className="flex items-center text-sm text-slate-600">
              <Clock className="h-4 w-4 mr-1" />
              15 min read
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            🏆 7 Best Passive Income Ideas in Canada (2025 Edition)
          </h1>
          <p className="text-xl text-slate-600">
            Want to grow your wealth while you sleep? You're not alone.
          </p>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <p className="text-lg leading-relaxed mb-6">
              With inflation rising and wages staying the same, many Canadians are turning to passive income to secure their financial future. Whether you're a student, a 9–5 worker, or a side hustler — the good news is: you can start with very little capital.
            </p>
            <p className="text-lg leading-relaxed mb-8">
              In this post, we'll explore 7 beginner-friendly, proven passive income strategies that work in Canada — and how you can get started today.
            </p>

            {/* 1. REITs */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">🏡 1. Invest in REITs (Real Estate Investment Trusts)</h2>
              <p className="text-lg mb-4">
                Want real estate income without buying a property or dealing with tenants? REITs are for you.
              </p>
              <p className="text-lg mb-6">
                REITs are companies that own and operate income-generating real estate (like malls, apartments, data centers). When you invest in REIT ETFs or individual REITs, you earn dividends monthly or quarterly, just like a landlord.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-3">📌 Why It's Great:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    No maintenance or property tax
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    Low-cost, diversified real estate exposure
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    Monthly income stream
                  </li>
                </ul>
              </div>

              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">✅ Best platform to invest in REITs:</h3>
                  <p className="mb-4">
                    We recommend Wealthsimple Trade — Canada's first zero-commission stock trading app. It's easy to use, beginner-friendly, and lets you invest with as little as $1.
                  </p>
                  <Button className="bg-green-600 hover:bg-green-700">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Open a Wealthsimple account today and get $25 free when you deposit $150+
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* 2. Dividend Stocks */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">💰 2. Earn from Dividend Stocks</h2>
              <p className="text-lg mb-4">
                Dividend stocks are Canada's most reliable passive income stream.
              </p>
              <p className="text-lg mb-6">
                These are shares of companies that share their profits with investors by paying regular cash dividends. Think of big names like TD Bank, Enbridge, Fortis, or Canadian Utilities — they've paid dividends for decades, even during recessions.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-3">📌 Why It's Great:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    Regular income (monthly or quarterly)
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    Stocks can grow in value too
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    Tax-efficient in TFSA
                  </li>
                </ul>
              </div>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">✅ Best platform to buy dividend stocks:</h3>
                  <p className="mb-4">
                    Use Questrade — low fees, strong reputation, and great for building long-term portfolios.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* 3. High-Interest Savings */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">🏦 3. Use High-Interest Savings Accounts (HISA)</h2>
              <p className="text-lg mb-4">
                Sometimes, safety is the best strategy. High-interest savings accounts are a 100% passive way to earn without risk.
              </p>
              <p className="text-lg mb-6">
                While traditional banks pay 0.01%–0.10% interest, online banks and fintechs offer 4%+ annual interest, paid monthly.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-3">📌 Why It's Great:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    Zero risk
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    Easy withdrawals
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    FDIC/CDIC insured
                  </li>
                </ul>
              </div>

              <Card className="bg-purple-50 border-purple-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">✅ Top pick:</h3>
                  <p className="mb-4">
                    Neo Financial offers up to 4%+ interest, no monthly fees, and up to 5% cashback at major brands.
                  </p>
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Open your free high-interest Neo account in 3 minutes
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* 4. Blog/YouTube */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">✍️ 4. Create a Blog or YouTube Channel</h2>
              <p className="text-lg mb-4">
                It may not be instant, but building a content brand is one of the most powerful forms of passive income.
              </p>
              <p className="text-lg mb-6">
                Bloggers and YouTubers in Canada earn thousands monthly through ads, affiliate links, and sponsorships — even while sleeping.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-3">📌 What You Need:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    Choose a niche (e.g., money, health, cooking, tech)
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    Post quality content consistently
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    Add Google AdSense and affiliate links
                  </li>
                </ul>
              </div>
              <p className="text-lg italic">
                You're reading an example right now 😊 — this blog is monetized through affiliate programs.
              </p>
            </div>

            {/* 5. Digital Products */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">📦 5. Sell Digital Products</h2>
              <p className="text-lg mb-4">
                Got a talent for design, productivity, or finance? Package it!
              </p>
              <p className="text-lg mb-6">
                Digital products are create-once, sell-forever assets. You can sell:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    Budgeting templates
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    Notion dashboards
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    eBooks
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    Canva designs
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    Study guides
                  </li>
                </ul>
              </div>

              <p className="text-lg mb-6">
                Platforms like Gumroad, Payhip, or Etsy make it easy to sell globally — even while you sleep.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">📌 Why It's Great:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    No shipping or inventory
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    100% profit margin
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    Fully automated once set up
                  </li>
                </ul>
              </div>
            </div>

            {/* 6. P2P Lending */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">🤝 6. Peer-to-Peer Lending (P2P)</h2>
              <p className="text-lg mb-6">
                Want to become the bank? In peer-to-peer lending, you lend small amounts to individuals or businesses via online platforms — and earn interest over time.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-3">✅ Example platforms:</h3>
                <p>Lending Loop (Canada), GoPeer</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-3">📌 Why It's Great:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    Higher returns than a savings account
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    Automated investing options
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    Monthly repayments
                  </li>
                </ul>
              </div>

              <Card className="bg-red-50 border-red-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-red-800 mb-3">⚠️ Risk Warning:</h3>
                  <p className="text-red-700">
                    P2P lending carries more risk than stocks or REITs — don't invest more than you can afford to lose.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* 7. Online Course */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">🎓 7. Build and Sell an Online Course</h2>
              <p className="text-lg mb-6">Do you know how to:</p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                    Build a resume?
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                    Code in Python?
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                    Budget on a low income?
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                    Speak French?
                  </li>
                </ul>
              </div>

              <p className="text-lg mb-6">
                Then you can record and sell a course on sites like Teachable, Udemy, or Gumroad. Some creators earn $1,000+/month passively from one course.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">📌 Why It's Great:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    Unlimited earning potential
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    Create once, earn forever
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    No experience needed
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Start */}
            <Card className="bg-gradient-to-r from-green-500 to-blue-500 text-white mb-12">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-4">💡 Quick Start Tip (No Time to Wait?)</h2>
                <p className="text-xl mb-6">
                  The easiest way to start today is to open a Wealthsimple account, invest in a REIT ETF or dividend stock, and earn passive income with just $1.
                </p>
                <Button className="bg-white text-green-600 hover:bg-gray-100">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Sign up here and claim your $25 bonus
                </Button>
              </CardContent>
            </Card>

            {/* Final Thoughts */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">✅ Final Thoughts</h2>
              <p className="text-xl mb-6">
                Passive income in Canada is no longer a dream — it's a system. Whether you're investing your money or building with your skills, 2025 is a great time to start.
              </p>
              <p className="text-xl font-semibold mb-8">
                Which of these ideas are you going to try first?
              </p>
              <p className="text-lg text-slate-600">
                👇 Comment below or subscribe to our email list to get weekly money tips!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
