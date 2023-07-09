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
                </div>
            </div>
        </section>
    );
}
