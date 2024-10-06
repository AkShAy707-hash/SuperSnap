import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bolt, Wrench, Search, ArrowRight } from "lucide-react"
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <Bolt className="h-6 w-6 text-blue-600" />
          <span className="ml-2 text-2xl font-bold text-teal-50">SkillForge</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            How It Works
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            For Professionals
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="/signup-page">
            Sign Up
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-yellow-500 tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Connect with Trusted Electricians and Plumbers
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Find skilled professionals for your home repairs and improvements. Fast, reliable, and hassle-free.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1 bg-transparent text-black" placeholder="Enter your zip code" type="number" />
                  <Button type="submit">
                    Find Pros
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-yellow-500 tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Join Our Network of Professionals
            </h2>
            <Tabs defaultValue="electricians" className="w-full max-w-2xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 text-gray-500">
                <TabsTrigger value="electricians">Electricians</TabsTrigger>
                <TabsTrigger value="plumbers">Plumbers</TabsTrigger>
              </TabsList>
              <TabsContent value="electricians" className="mt-6">
                <div className="flex flex-col items-center space-y-4">
                  <Bolt className="h-12 w-12 text-yellow-500" />
                  <h3 className="text-2xl font-bold text-gray-500">Electricians</h3>
                  <p className="text-gray-500 text-center max-w-md">
                    Connect with customers in need of electrical services. Grow your business and manage your schedule efficiently.
                  </p>
                  <Button className="text-gray-400">Sign Up as an Electrician</Button>
                </div>
              </TabsContent>
              <TabsContent value="plumbers" className="mt-6">
                <div className="flex flex-col items-center space-y-4">
                  <Wrench className="h-12 w-12 text-blue-500" />
                  <h3 className="text-2xl font-bold text-gray-500">Plumbers</h3>
                  <p className="text-gray-500 text-center max-w-md">
                    Find new plumbing jobs in your area. Showcase your skills and build your reputation with verified reviews.
                  </p>
                  <Button className="text-gray-400">Sign Up as a Plumber</Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <Search className="h-12 w-12 text-blue-600" />
              <h2 className="text-3xl font-bold tracking-tighter text-gray-400 sm:text-4xl md:text-5xl">Find Services</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                Looking for a reliable electrician or plumber? Enter your location to get started.
              </p>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your zip code" type="text" />
                  <Button type="submit" className="w-full sm:w-auto">Search</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 TradeConnect. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}