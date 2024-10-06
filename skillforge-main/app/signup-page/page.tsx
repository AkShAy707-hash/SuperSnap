'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Bolt, Wrench, User } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Navigate } from 'react-router-dom'

export default function SignUpPage() {
  const [userType, setUserType] = useState('customer')

  return (
    <div className="container mx-auto px-4 py-8 max-w-md">
      <h1 className="text-3xl font-bold text-center text-yellow-500 mb-6">Sign Up for SkillForge</h1>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@example.com" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirm-password">Confirm Password</Label>
          <Input id="confirm-password" type="password" required />
        </div>
        <RadioGroup defaultValue="customer" onValueChange={setUserType} className="space-y-2">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="customer" id="customer" />
            <Label htmlFor="customer" className="flex items-center">
              <User className="mr-2 h-4 w-4" />
              Customer
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="professional" id="professional" />
            <Label htmlFor="professional" className="flex items-center">
              <Bolt className="mr-2 h-4 w-4" />
              <Wrench className="mr-2 h-4 w-4" />
              Professional
            </Label>
          </div>
        </RadioGroup>
        {userType === 'professional' && (
          <div className="space-y-2">
            <Label htmlFor="profession">Profession</Label>
            <Select required>
              <SelectTrigger id="profession">
                <SelectValue placeholder="Select your profession" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="electrician">Electrician</SelectItem>
                <SelectItem value="plumber">Plumber</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}
        <div className="space-y-2">
          <Label htmlFor="zip-code">Zip Code</Label>
          <Input id="zip-code" type="text" placeholder="12345" required />
        </div>
        
        <button type='submit' className="w-full text-white bg-yellow-500" >Create Account</button>
      
      </form>
      <p className="mt-4 text-center text-sm text-gray-600">
        Already have an account?{' '}
        <Link  href="/signin-page"   className="font-medium text-blue-600 hover:underline">
          Sign in
        </Link>
        
      </p>
    </div>
  )
}