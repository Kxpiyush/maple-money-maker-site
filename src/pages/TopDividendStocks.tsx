import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Clock, User, TrendingUp, AlertTriangle, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const TopDividendStocks = () => {
  const stocks = [
    {
      rank: 1,
      name: "Royal Bank of Canada",
      symbol: "RY",
      yield: "~4%",
      industry: "Banking",
      reason: "Largest bank in Canada with a strong dividend history and diversified revenue streams."
    },
    {
      rank: 2,
      name: "Toronto-Dominion Bank",
      symbol: "TD",
      yield: "~4%",
      industry: "Banking",
      reason: "Extensive US and Canadian presence with steady dividend growth."
    },
    {
      rank: 3,
      name: "Enbridge Inc.",
      symbol: "ENB",
      yield: "~6%",
      industry: "Energy/Utilities",
      reason: "Major energy infrastructure company with consistent dividend payouts."
    },
    {
      rank: 4,
      name: "Fortis Inc.",
      symbol: "FTS",
      yield: "~3.8%",
      industry: "Utilities",
      reason: "Stable utility company with a growing dividend track record."
    },
    {
      rank: 5,
      name: "BCE Inc.",
      symbol: "BCE",
      yield: "~5%",
      industry: "Telecommunications",
      reason: "Canada's largest telecom with strong cash flow and dividends."
    },
    {
      rank: 6,
      name: "Canadian National Railway",
      symbol: "CNR",
      yield: "~1.8%",
      industry: "Transportation",
      reason: "Leading railway with solid growth potential and increasing dividends."
    },
    {
      rank: 7,
      name: "Canadian Imperial Bank of Commerce",
      symbol: "CM",
      yield: "~5%",
      industry: "Banking",
      reason: "High dividend yield but with slightly higher risk compared to peers."
    },
    {
      rank: 8,
      name: "Brookfield Asset Management",
      symbol: "BAM.A",
      yield: "~1.5%",
      industry: "Asset Management",
      reason: "Global asset manager with diverse holdings and dividend growth potential."
    },
    {
      rank: 9,
      name: "National Bank of Canada",
      symbol: "NA",
      yield: "~4%",
      industry: "Banking",
      reason: "Strong regional bank with a good dividend history."
    },
    {
      rank: 10,
      name: "Shopify Inc.",
      symbol: "SHOP",
      yield: "No dividend",
      industry: "E-commerce Technology",
      reason: "High-growth tech company for capital gains, not dividends."
    }
  ];

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
            <Badge className="bg-purple-100 text-purple-800">
              Investing
            </Badge>
            <div className="flex items-center text-sm text-slate-600">
              <Calendar className="h-4 w-4 mr-1" />
              Dec 3, 2024
            </div>
            <div className="flex items-center text-sm text-slate-600">
              <Clock className="h-4 w-4 mr-1" />
              12 min read
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            📈 Top 10 Canadian Dividend Stocks for 2024
          </h1>
          <p className="text-xl text-slate-600">
            Discover reliable dividend-paying stocks that have consistently rewarded Canadian investors.
          </p>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <p className="text-lg leading-relaxed mb-6">
              Dividend investing is a favorite strategy for Canadian investors seeking steady passive income. Dividend stocks provide regular payments from companies sharing profits, often with the potential for price appreciation.
            </p>
            <p className="text-lg leading-relaxed mb-8">
              Here's a list of the top 10 Canadian dividend stocks for 2024, chosen for their history of reliable payments, strong financial health, and growth prospects.
            </p>

            {/* Stock List */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">🏆 Top 10 Canadian Dividend Stocks</h2>
              
              <div className="space-y-6">
                {stocks.map((stock) => (
                  <Card key={stock.rank} className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                            {stock.rank}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-slate-900">{stock.name} ({stock.symbol})</h3>
                            <div className="flex items-center gap-4 mt-1">
                              <Badge variant="secondary" className="bg-green-100 text-green-800">
                                {stock.industry}
                              </Badge>
                              <span className="text-lg font-semibold text-green-600">
                                Dividend Yield: {stock.yield}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-slate-700">
                        <strong>Why Buy:</strong> {stock.reason}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* How to Invest */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">💰 How to Invest</h2>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <ol className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">1</span>
                    <span>Use discount brokers like Questrade or Wealthsimple to buy these stocks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">2</span>
                    <span>Consider dividend ETFs for diversification if you prefer less hands-on investing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">3</span>
                    <span>Reinvest dividends to grow your portfolio faster (DRIP programs)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">4</span>
                    <span>Use TFSA or RRSP accounts to maximize tax efficiency</span>
                  </li>
                </ol>
              </div>

              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">✅ Best platform to buy dividend stocks:</h3>
                  <p className="mb-4">
                    Use Questrade — low fees, strong reputation, and great for building long-term portfolios. They offer commission-free ETF purchases and competitive stock trading fees.
                  </p>
                  <Button className="bg-green-600 hover:bg-green-700">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Open a Questrade account today
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Risks to Consider */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">⚠️ Risks to Consider</h2>
              
              <Card className="bg-red-50 border-red-200">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <AlertTriangle className="h-6 w-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-red-800 mb-3">Important Risk Warnings:</h3>
                      <ul className="space-y-3 text-red-700">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span><strong>Dividend cuts can happen</strong> in economic downturns or if companies face financial difficulties</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span><strong>Always diversify your investments</strong> — don't put all your money in one stock or sector</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span><strong>Monitor company fundamentals regularly</strong> — dividend history doesn't guarantee future payments</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span><strong>Interest rate changes</strong> can affect dividend stock prices and attractiveness</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Dividend ETF Alternative */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">📊 Prefer ETFs? Try These Dividend ETFs</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-purple-50 border-purple-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-purple-800 mb-3">VDY - Vanguard FTSE Canadian High Dividend Yield</h3>
                    <ul className="space-y-2 text-purple-700">
                      <li>• Diversified Canadian dividend stocks</li>
                      <li>• Low management fee (0.22%)</li>
                      <li>• Monthly distributions</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-purple-50 border-purple-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-purple-800 mb-3">XDV - iShares Core MSCI Total Return Index</h3>
                    <ul className="space-y-2 text-purple-700">
                      <li>• Broad Canadian dividend exposure</li>
                      <li>• Ultra-low fees (0.11%)</li>
                      <li>• Quarterly distributions</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Conclusion */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">✅ Conclusion</h2>
              <p className="text-xl mb-6">
                These top dividend stocks provide a solid foundation for building passive income in 2024. The key is to start early, invest consistently, and reinvest your dividends for compound growth.
              </p>
              <p className="text-xl font-semibold mb-8">
                Combine them with tax-efficient accounts like TFSAs and RRSPs to maximize your returns and build wealth faster.
              </p>
              <p className="text-lg text-slate-600">
                👇 Which dividend stock are you most excited to add to your portfolio?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopDividendStocks;