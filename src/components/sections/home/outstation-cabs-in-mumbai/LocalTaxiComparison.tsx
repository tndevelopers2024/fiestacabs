"use client";

import React from "react";

const LocalTaxiComparison = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 lg:px-8">
                <div className="mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        Outstation Cabs vs. Local Mumbai Taxi Service
                    </h2>
                </div>

                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                    <p>
                        Mumbai taxi service and outstation cab service operate on different fare structures and vehicle standards. A local Mumbai taxi fare is meter-based and covers city travel. It is not designed for outstation trips and the fare structure does not translate to intercity journeys.
                    </p>
                    <p>
                        Outstation cabs from Mumbai operate on per-km contracts with fixed minimums, batta structures, and multi-day rate logic. Using an unregistered Mumbai taxi for outstation travel means no formal GST invoice, no GPS tracking accountability, no contract, and no customer support if something goes wrong on the road.
                    </p>
                    <p>
                        Fiesta&apos;s intercity cab service is registered, GST-compliant, and built specifically for outstation trips from cities like Mumbai. The distinction matters particularly for corporate travelers who need billing documentation and for families traveling to destinations like Shirdi or Mahabaleshwar with safety requirements.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default LocalTaxiComparison;
