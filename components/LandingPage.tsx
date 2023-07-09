'use client';

import Button from '@/components/ui/Button';
import { Database } from '@/types_db';
import { postData } from '@/utils/helpers';
import { getStripe } from '@/utils/stripe-client';
import { Session, User } from '@supabase/supabase-js';
import cn from 'classnames';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

type Subscription = Database['public']['Tables']['subscriptions']['Row'];
type Product = Database['public']['Tables']['products']['Row'];
type Price = Database['public']['Tables']['prices']['Row'];
interface ProductWithPrices extends Product {
    prices: Price[];
}
interface PriceWithProduct extends Price {
    products: Product | null;
}
interface SubscriptionWithProduct extends Subscription {
    prices: PriceWithProduct | null;
}
type BillingInterval = 'lifetime' | 'year' | 'month';

export default function LandingPage() {
    return (
        <section className="bg-black">
            <div className="max-w-6xl px-4 py-8 mx-auto sm:py-8 sm:px-6 lg:px-8">
                {/* <div className="sm:flex sm:flex-col sm:align-center bg-no-repeat bg-center" style={{ backgroundImage: "url('/blur_grad.png')", backgroundSize: '30%' }}> */}
                <div className="sm:flex sm:flex-col sm:align-center bg-no-repeat bg-center">
                    {/* <img
                        src="/blur_grad.png"
                        alt="stripe.com Logo"
                        className="h-12 text-white"
                    /> */}
                    <h1 className="text-4xl font-extrabold text-white sm:text-center sm:text-6xl">
                        MonsterDM
                    </h1>
                    <p className="max-w-2xl m-auto mt-5 text-xl text-zinc-200 sm:text-center sm:text-2xl italic">
                        Simple (Not so Fancy) Tool to Automate your Agency Outreach
                    </p>
                    <p className="max-w-2xl m-auto mt-5 text-xl text-zinc-200 sm:text-center sm:text-2xl italic">
                        Book more Appointments with your leads
                    </p>
                    <p className="max-w-2xl m-auto mt-5 text-xl text-zinc-200 sm:text-center sm:text-2xl italic">
                        Increase your 💵MRR
                    </p>
                    <p className="max-w-2xl m-auto mt-5 text-xl text-zinc-200 sm:text-center sm:text-3xl font-bold italic">
                        How does it work?
                    </p>
                    <p className="max-w-2xl m-auto mt-5 text-xl text-zinc-200 sm:text-center sm:text-3xl font-bold italic">
                        <p className="text-xl font-normal">
                            Start by adding your Instagram accounts. There is no Limit to adding instagram accounts.
                        </p>
                    </p>
                    <div className="w-full">
                        <img className="w-20 mx-auto my-20" src="/arrow-down.png" alt="down-arrow" />
                    </div>
                    <p className="max-w-2xl m-auto mt-5 text-xl text-zinc-200 sm:text-center sm:text-3xl font-bold italic">
                        Instagram Profile
                        <p className="text-xl font-normal">
                            It will start by visiting the instagram profile of your lead
                        </p>
                    </p>
                    <div className="w-full">
                        <img className="w-20 mx-auto my-20" src="/arrow-down.png" alt="down-arrow" />
                    </div>
                    <p className="max-w-2xl m-auto mt-5 text-xl text-zinc-200 sm:text-center sm:text-3xl font-bold italic">
                        Follow Lead
                        <p className="text-xl font-normal">
                            Depending on the options you choose, It will follow the lead.
                            If you are already following, then It will skip.
                        </p>
                    </p>
                    <div className="w-full">
                        <img className="w-20 mx-auto my-20" src="/arrow-down.png" alt="down-arrow" />
                    </div>
                    <p className="max-w-2xl m-auto mt-5 text-xl text-zinc-200 sm:text-center sm:text-3xl font-bold italic">
                        Like & Comment Posts
                        <p className="text-xl font-normal">
                            After hitting the follow button, our software will detect if the user has posted anything, and accordingly will start liking and commenting on the posts.
                            The software will like the last 3 posts and comment on the last post done by the lead.
                        </p>
                    </p>
                    <div className="w-full">
                        <img className="w-20 mx-auto my-20" src="/arrow-down.png" alt="down-arrow" />
                    </div>
                    <p className="max-w-2xl m-auto mt-5 text-xl text-zinc-200 sm:text-center sm:text-3xl font-bold italic">
                        Send Direct Message
                        <p className="text-xl font-normal">
                            At last it will send a direct message to the lead, which will be provided by you.
                        </p>
                    </p>
                    <div className="my-20">
                        <p className="max-w-2xl m-auto mt-5 text-xl text-zinc-200 sm:text-center sm:text-3xl font-bold italic">
                            Keeping it Simple
                        </p>
                        <p className="max-w-2xl m-auto mt-5 text-xl text-zinc-200 sm:text-center sm:text-3xl font-bold italic">
                            Cheapest Price in the Market 🙌
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
