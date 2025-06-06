import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Clock, User, CheckCircle, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const TfsaVsRrsp = () => {
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
            <Badge className="bg-blue-100 text-blue-800">
              Tax Strategy
            </Badge>
            <div className="flex items-center text-sm text-slate-600">
              <Calendar className="h-4 w-4 mr-1" />
              Dec 5, 2024
            </div>
            <div className="flex items-center text-sm text-slate-600">
              <Clock className="h-4 w-4 mr-1" />
              8 min read
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            TFSA vs RRSP: Which is Better for Passive Income?
          </h1>
          <p className="text-xl text-slate-600">
            A comprehensive comparison of Canada's top tax-advantaged accounts for building wealth.
          </p>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <p className="text-lg leading-relaxed mb-6">
              When it comes to saving and investing in Canada, two accounts often come up: the Tax-Free Savings Account (TFSA) and the Registered Retirement Savings Plan (RRSP). Both offer valuable tax advantages but serve different purposes.
            </p>
            <p className="text-lg leading-relaxed mb-8">
              If your goal is to build passive income, which account is better? Let's break down the features, benefits, and best uses of each to help you decide.
            </p>

            {/* What is a TFSA */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">🏦 What is a TFSA?</h2>
              
              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Contributions are made with after-tax dollars</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Investment income (interest, dividends, capital gains) grows tax-free inside the account</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Withdrawals are completely tax-free and can be made anytime without penalty</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Contribution room accumulates every year if unused</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Ideal for both short-term and long-term investing</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* What is an RRSP */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">📈 What is an RRSP?</h2>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Contributions are tax-deductible, reducing your taxable income in the year you contribute</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Investment growth is tax-deferred until withdrawal</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Withdrawals are taxed as income, usually during retirement when your income (and tax rate) is lower</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Annual contribution limit is based on your income</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Designed primarily for retirement savings</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">⚖️ Comparing TFSA and RRSP for Passive Income</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border border-slate-300 p-4 text-left font-semibold">Feature</th>
                      <th className="border border-slate-300 p-4 text-left font-semibold text-green-700">TFSA</th>
                      <th className="border border-slate-300 p-4 text-left font-semibold text-blue-700">RRSP</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-300 p-4 font-medium">Tax Treatment</td>
                      <td className="border border-slate-300 p-4">Tax-free growth and withdrawals</td>
                      <td className="border border-slate-300 p-4">Tax-deferred growth, taxed on withdrawal</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-300 p-4 font-medium">Contribution Limits</td>
                      <td className="border border-slate-300 p-4">Annual limit (e.g., $6,500 for 2024)</td>
                      <td className="border border-slate-300 p-4">Up to 18% of previous year's income (max ~$31,560 in 2024)</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-4 font-medium">Flexibility</td>
                      <td className="border border-slate-300 p-4">High — withdraw anytime without penalty</td>
                      <td className="border border-slate-300 p-4">Limited — withdrawals taxed and may have penalties</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-300 p-4 font-medium">Ideal For</td>
                      <td className="border border-slate-300 p-4">Both short and long-term investing</td>
                      <td className="border border-slate-300 p-4">Primarily long-term retirement saving</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-4 font-medium">Impact on Government Benefits</td>
                      <td className="border border-slate-300 p-4">No impact</td>
                      <td className="border border-slate-300 p-4">Withdrawals count as income, can affect benefits</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Which is Better */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">🤔 Which is Better for Passive Income?</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-green-800 mb-3">Use a TFSA if:</h3>
                    <p className="text-green-700">
                      You want tax-free, flexible access to your passive income investments like dividend stocks or REITs.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-blue-800 mb-3">Use an RRSP if:</h3>
                    <p className="text-blue-700">
                      You want to lower your taxable income now and expect to be in a lower tax bracket in retirement, making it good for long-term wealth building.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-purple-50 border-purple-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-purple-800 mb-3">💡 Pro Tip:</h3>
                  <p className="text-purple-700">
                    Many Canadians use both accounts to maximize tax advantages. This strategy allows you to benefit from immediate tax deductions (RRSP) while also building a tax-free income stream (TFSA).
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Getting Started */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">🚀 Getting Started</h2>
              
              <div className="bg-slate-50 p-6 rounded-lg">
                <ol className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">1</span>
                    <span>Open a TFSA and/or RRSP account with providers like Wealthsimple or Questrade</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">2</span>
                    <span>Automate your contributions to build the habit</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">3</span>
                    <span>Invest in dividend stocks, ETFs, or REITs to start building passive income</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">4</span>
                    <span>Monitor and rebalance your portfolio regularly</span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Conclusion */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">✅ Conclusion</h2>
              <p className="text-xl mb-6">
                Choosing between TFSA and RRSP depends on your financial goals and tax situation. For most passive income seekers, TFSAs offer more flexibility, but RRSPs have valuable tax benefits too.
              </p>
              <p className="text-xl font-semibold mb-8">
                Use them wisely to grow your wealth efficiently and build the passive income stream you deserve.
              </p>
              <p className="text-lg text-slate-600">
                👇 Which account are you planning to use for your passive income strategy?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TfsaVsRrsp;