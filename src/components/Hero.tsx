"use client"
import React, { useState } from "react";
import { CONTACT_AND_SUPPORT_DATA_LIST, USER_GUIDE_DATA_LIST } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import { DeleteIcon } from "@/utils/icons";

type Product = {
    id: number;
    alpha_two_code: string;
    country: string;
    domains: number;
    state_province: string;
};

type HeroProps = {
    data: Product[];
};


const Hero: React.FC<HeroProps> = ({ data }) => {
    const [search, setSearch] = useState("");

    const filteredData = data.filter((product) => {
        const matchesSearch = product.country.toLowerCase().includes(search.toLowerCase());
        return matchesSearch;
    });

    if (!data || data.length === 0) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className='flex items-center justify-center 2xl:pt-[139px] xl:pt-24 lg:pt-20 md:pt-14 pt-10 2xl:pb-[62px] xl:pb-12 lg:pb-11 pb-10 fade-white'>
                <div className="min-[1600px]:max-w-[1272px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] max-w-[540px] px-4 mx-auto w-full">
                    <div className="flex flex-wrap items-center justify-between 2xl:pb-11 pb-10">
                        <h2 className='!leading-[100%] font-medium xl:text-[32px] lg:text-3xl md:text-2xl text-xl'>My DevOps Spaces</h2>
                        <button className='xl:py-[14px] lg:py-3 py-2 xl:px-4 lg:px-3 px-2 text-white font-medium lg:text-base text-sm flex justify-center items-center bg-linear-button rounded-xs'>Create a DevOps Space (1 left)</button>
                    </div>
                    <div className="flex flex-wrap w-full items-start justify-between">
                        <div className="lg:w-3/12 w-full">
                            <h4 className='font-medium xl:text-xl lg:text-lg !leading-[100%] lg:mb-5 md:mb-4 mb-3'>User’s Guides</h4>
                            <div className="flex flex-col gap-2 max-w-[251px] lg:mb-5 mb-4 w-full">
                                {USER_GUIDE_DATA_LIST.map((item, index) => (
                                    <Link href={item.link} key={index} className="flex items-center lg:gap-2.5 gap-2 border-l-blue bg-blue-linear cursor-pointer lg:py-3 py-2 lg:ps-[14px] ps-3">
                                        <Image src="/assets/images/svg/bookmark-icon.svg" alt="bookmark-icon" width={16} height={16} />
                                        <h6 className='font-medium md:text-sm text-xs !leading-[100%]'>{item.title}</h6>
                                    </Link>
                                ))}
                            </div>
                            <h4 className='font-medium xl:text-xl lg:text-lg !leading-[100%] lg:mb-5 md:mb-4 mb-3'>Contact and Support</h4>
                            <div className="flex flex-col gap-2 max-w-[251px] lg:mb-5 mb-4 w-full">
                                {CONTACT_AND_SUPPORT_DATA_LIST.map((item, index) => (
                                    <Link href={item.link} key={index} className="flex items-center lg:gap-2.5 gap-2 border-l-blue bg-blue-linear cursor-pointer lg:py-3 py-2 lg:ps-[14px] ps-3">
                                        <Image className="!w-auto !h-auto" src={item.image} alt="bookmark-icon" width={16} height={16} />
                                        <h6 className='font-medium md:text-sm text-xs !leading-[100%]'>{item.title}</h6>
                                    </Link>
                                ))}
                            </div>
                            <h4 className='font-medium xl:text-xl lg:text-lg !leading-[100%] lg:mb-5 md:mb-4 mb-3'>Others</h4>
                            <div className="flex flex-col gap-2 max-w-[251px] lg:mb-5 mb-4 w-full">
                                <Link href="#docs" className="flex items-center lg:gap-2.5 gap-2 border-l-blue bg-blue-linear cursor-pointer lg:py-3 py-2 lg:ps-[14px] ps-3">
                                    <Image src="/assets/images/svg/share-icon.svg" alt="bookmark-icon" width={16} height={16} />
                                    <h6 className='font-medium md:text-sm text-xs !leading-[100%]'>DevSecOps Docs</h6>
                                </Link>
                            </div>
                        </div>
                        <div className="lg:w-9/12 w-full">
                            <div className="bg-white pt-2.5 lg:pb-6 pb-4">
                                <div className="px-4 pb-[10px] flex flex-wrap w-full items-center md:justify-between justify-center max-md:mx-auto">
                                    <h4 className="flex items-center lg:gap-2.5 gap-2 font-medium md:text-sm text-xs !leading-[100%]">
                                        Show
                                        <span>
                                            <div className="relative w-12 cursor-pointer">
                                                <select className="bg-dark-pink relative text-white px-2 py-1 pr-8 rounded-md appearance-none outline-none w-full">
                                                    <option value="5">5</option>
                                                    <option value="10">10</option>
                                                    <option value="15">15</option>
                                                    <option value="20">20</option>
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-1 flex items-center text-white">
                                                    <Image src="/assets/images/svg/chevron-down.svg" alt="arrow-down-icon" width={16} height={16} />
                                                </div>
                                            </div>
                                        </span>
                                        Enter per page
                                    </h4>
                                    <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder='Find' className='text-black md:mt-0 mt-4 placeholder:text-black lg:text-sm text-xs placeholder:lg:text-sm placeholder:text-xs !leading-[100%] lg:px-4 px-3 lg:py-[11px] py-2 rounded-full outline-none max-w-xs w-full border-1 border-black/20' />
                                </div>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="min-w-full">
                                    <thead className="bg-[#4F02FE] text-white">
                                        <tr>
                                            <th className="lg:px-[15px] px-3 lg:py-3 py-2 text-left text-white whitespace-nowrap text-xs font-medium uppercase tracking-wider">
                                                <div className="flex items-center justify-between">Code<Image src="/assets/images/svg/up-down-icon.svg" alt="up-down-icon" width={20} height={20} /></div>
                                            </th>
                                            <th className="lg:px-[15px] px-3 lg:py-3 py-2 text-left text-white whitespace-nowrap text-xs font-medium uppercase tracking-wider">
                                                <div className="flex items-center justify-between">Space<Image src="/assets/images/svg/up-down-icon.svg" alt="up-down-icon" width={20} height={20} /></div>
                                            </th>
                                            <th className="lg:px-[15px] px-3 lg:py-3 py-2 text-left text-white whitespace-nowrap text-xs font-medium uppercase tracking-wider">
                                                <div className="flex items-center justify-between">Offer<Image src="/assets/images/svg/up-down-icon.svg" alt="up-down-icon" width={20} height={20} /></div>
                                            </th>
                                            <th className="lg:px-[15px] px-3 lg:py-3 py-2 text-left text-white whitespace-nowrap text-xs font-medium uppercase tracking-wider">
                                                <div className="flex items-center justify-between">Team<Image src="/assets/images/svg/up-down-icon.svg" alt="up-down-icon" width={20} height={20} /></div>
                                            </th>
                                            <th className="lg:px-[15px] px-3 lg:py-3 py-2 text-left text-white whitespace-nowrap text-xs font-medium uppercase tracking-wider">
                                                <div className="flex items-center justify-between">APP ID<Image src="/assets/images/svg/up-down-icon.svg" alt="up-down-icon" width={20} height={20} /></div>
                                            </th>
                                            <th className="lg:px-[15px] px-3 lg:py-3 py-2 text-left text-white whitespace-nowrap text-xs font-medium uppercase tracking-wider">
                                                <div className="flex items-center justify-between">Action<Image src="/assets/images/svg/up-down-icon.svg" alt="up-down-icon" width={20} height={20} /></div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white">
                                        {filteredData.map((row, index) => (
                                            <tr key={index} className="hover:bg-[#CD0CA714] transition-all ease-linear duration-300">
                                                <td className="lg:px-[15px] px-3 lg:py-3 py-2 whitespace-nowrap text-sm text-black/70">{row.alpha_two_code}</td>
                                                <td className="lg:px-[15px] px-3 lg:py-3 py-2 whitespace-nowrap text-sm text-black/70">{row.domains}</td>
                                                <td className="lg:px-[15px] px-3 lg:py-3 py-2 whitespace-nowrap text-sm text-black/70 min-w-24">
                                                    <span className={`px-2 inline-flex text-xs text-white rounded-xs ${row.alpha_two_code === 'US' ? 'bg-[#E61616]' : 'bg-[#5DB561]'}`}>{row.alpha_two_code}</span>
                                                </td>

                                                <td className="lg:px-[15px] px-3 lg:py-3 py-2 whitespace-nowrap text-sm text-black/70">{row.country}</td>
                                                <td className="lg:px-[15px] px-3 lg:py-3 py-2 whitespace-nowrap text-sm text-black/70 min-w-24">{row.alpha_two_code}</td>
                                                <td className="lg:px-[15px] px-3 lg:py-3 py-2 whitespace-nowrap text-sm text-black/70 flex justify-between items-center lg:min-w-[224px] min-w-44 w-full">
                                                    <Link href="#manage" className="text-black/70 hover:text-black transition-all ease-linear duration-300 cursor-pointer flex gap-1">Manage
                                                        <Image src="/assets/images/svg/arrow-up.svg" alt="arrow-right-icon" width={16} height={16} />
                                                    </Link>
                                                    <span className="delete-icon cursor-pointer transition-all ease-linear duration-300"><DeleteIcon /> </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
};

export default Hero;
