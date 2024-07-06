'use client'

import { Button } from '@/components/ui/button'

import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuRadioGroup, DropdownMenuRadioItem } from '@/components/ui/dropdown-menu'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

import Link from 'next/link'
import * as React from 'react'

export default function Home (): React.JSX.Element {
  const [language, setLanguage] = React.useState('english')

  return (
    <main className="text-slate-50 flex min-h-screen flex-col items-start justify-between mx-7 my-10">

      <div className="flex flex-row justify-between mt-9">

          <div className="flex flex-col items-start gap-2">
            <p className="text-slate-900 font-semibold flex items-start">your generated qrcode
            </p>

            <div className="flex flex-col gap-8 bg-slate-50 border-2 border-slate-200 w-80 h-80 rounded-md">

            </div>

            <div className="flex flex-row justify-between gap-2 items-start">
              <Button asChild className="h-15">
                <Link href={'download'}>Download</Link>
              </Button>
              <Button
                className="h-15"
              >
                  Share
              </Button>
            </div>

          </div>

          <div className="flex flex-col items-end gap-2">

            <div className="flex flex-col items-center">
                <DropdownMenu>

                  <DropdownMenuTrigger asChild>
                    <Button className='text-slate-900' variant="outline">select your language</Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Languages</DropdownMenuLabel>

                  <DropdownMenuSeparator />

                    <DropdownMenuRadioGroup value={language} onValueChange={setLanguage}>
                      <DropdownMenuRadioItem value="Portuguese">Portuguese</DropdownMenuRadioItem>

                      <DropdownMenuRadioItem value="French">French</DropdownMenuRadioItem>

                      <DropdownMenuRadioItem value="German">German</DropdownMenuRadioItem>

                      <DropdownMenuRadioItem value="Japanese">Japanese</DropdownMenuRadioItem>

                      <DropdownMenuRadioItem value="Korean">Korean</DropdownMenuRadioItem>

                      <DropdownMenuRadioItem value="Italian">Italian</DropdownMenuRadioItem>

                      <DropdownMenuRadioItem value="Russian">Russian</DropdownMenuRadioItem>

                      <DropdownMenuRadioItem value="Turkish">Turkish</DropdownMenuRadioItem>

                    </DropdownMenuRadioGroup>

                  </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <div className="flex flex-col">
              <Label htmlFor="text" className='text-slate-900'>Your text</Label>
              <Textarea placeholder="Type your text here." id="text" className='text-slate-900 p-20'/>
            </div>

          </div>
      </div>

    </main>
  )
}
