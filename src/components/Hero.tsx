"use client";
import React, { useState } from "react";
import { CONTACT_AND_SUPPORT_DATA_LIST, USER_GUIDE_DATA_LIST } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import { DeleteIcon } from "@/utils/icons";

type Product = {
    web_pages: string;
    alpha_two_code: string;
    country: string;
    domains: number;
    name: string;
};

type HeroProps = {
    data: Product[];
};

const Hero: React.FC<HeroProps> = ({ data }) => {
    const [search, setSearch] = useState("");
    const [apiData, setApiData] = useState<Product[]>(data);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    const handleDelete = (web_pages: string) => {
        setApiData((prevApiData) =>
            prevApiData.filter((product) => product.web_pages !== web_pages)
        );
    };

    const handlePerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setItemsPerPage(Number(e.target.value));
        setCurrentPage(1);
    };

    const filteredData = apiData.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = filteredData.slice(startIndex, endIndex);

    if (!apiData || apiData.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex items-center justify-center 2xl:pt-[139px] xl:pt-24 lg:pt-20 md:pt-14 pt-10 2xl:pb-[62px] xl:pb-12 lg:pb-11 pb-10 bg-fade-white">
            <div className="min-[1600px]:max-w-[1272px] xl:max-w-[1240px] md:max-w-[1024px] max-w-[540px] px-4 mx-auto w-full">
                <div className="flex flex-wrap lg:gap-0 md:gap-7 max-sm:flex-col gap-5 max-sm:justify-center items-center sm:justify-between 2xl:pb-11 pb-10">
                    <h2 className="!leading-[100%] font-medium xl:text-[32px] lg:text-3xl md:text-2xl text-xl">My DevOps Spaces</h2>
                    <button className="xl:py-[14px] lg:py-3 py-2 xl:px-4 lg:px-3 px-2 text-white font-medium lg:text-base text-sm flex justify-center items-center bg-linear-button hover:shadow-xl cursor-pointer hover:-scale-[1.03] transition-all ease-linear duration-300 rounded-xs">
                        Create a DevOps Space (1 left)
                    </button>
                </div>
                <div className="flex flex-wrap w-full items-start justify-between">
                    <div className="lg:w-3/12 w-full max-lg:flex flex-wrap justify-center gap-16">
                        <div className="flex flex-col">
                            <h4 className="font-medium xl:text-xl lg:text-lg sm:!leading-[100%] lg:mb-5 md:mb-4 mb-3 sm:whitespace-nowrap">User’s Guides</h4>
                            <div className="flex flex-col gap-2 max-w-[251px] max-sm:max-w-[129px] lg:mb-5 mb-4 w-full">
                                {USER_GUIDE_DATA_LIST.map((item, index) => (
                                    <Link href={item.link} key={index} className="flex items-center lg:gap-2.5 gap-2 border-l-blue bg-blue-linear cursor-pointer lg:py-3 py-2 lg:ps-[14px] ps-3">
                                        <Image src="/assets/images/svg/bookmark-icon.svg" alt="bookmark-icon" width={16} height={16} />
                                        <h6 className="font-medium md:text-sm text-xs !leading-[100%] sm:whitespace-nowrap">{item.title}</h6>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="max-lg:flex flex-wrap justify-between md:max-w-[60%] max-w-[40%] w-full">
                            <div className="flex flex-col">
                                <h4 className="font-medium xl:text-xl lg:text-lg sm:!leading-[100%] lg:mb-5 md:mb-4 mb-3 sm:whitespace-nowrap">Contact and Support</h4>
                                <div className="flex flex-col gap-2 max-w-[251px] max-sm:max-w-[129px] lg:mb-5 mb-4 w-full">
                                    {CONTACT_AND_SUPPORT_DATA_LIST.map((item, index) => (
                                        <Link href={item.link} key={index} className="flex items-center lg:gap-2.5 gap-2 border-l-blue bg-blue-linear cursor-pointer lg:py-3 py-2 lg:ps-[14px] ps-3">
                                            <Image className="!w-auto !h-auto" src={item.image} alt="support-icon" width={16} height={16} />
                                            <h6 className="font-medium md:text-sm text-xs !leading-[100%] sm:whitespace-nowrap">{item.title}</h6>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <h4 className="font-medium xl:text-xl lg:text-lg sm:!leading-[100%] lg:mb-5 md:mb-4 mb-3 sm:whitespace-nowrap">Others</h4>
                                <div className="flex flex-col gap-2 max-w-[251px] max-sm:max-w-[129px] lg:mb-5 mb-4 w-full">
                                    <Link href="#docs" className="flex items-center lg:gap-2.5 gap-2 border-l-blue bg-blue-linear cursor-pointer lg:py-3 py-2 lg:ps-[14px] ps-3">
                                        <Image src="/assets/images/svg/share-icon.svg" alt="docs-icon" width={16} height={16} />
                                        <h6 className="font-medium md:text-sm text-xs !leading-[100%] sm:whitespace-nowrap">DevSecOps Docs</h6>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-9/12 w-full flex flex-col lg:mt-0 md:mt-7 mt-5">
                        <div className="bg-shadow rounded-md border-1 border-[#F1F1F1] overflow-hidden" >
                            <div className="bg-white lg:pt-2.5 md:pt-8 pt-7">
                                <div className="px-4 lg:pb-[10px] pb-4 flex flex-wrap w-full items-center md:justify-between justify-center max-md:mx-auto">
                                    <h4 className="flex items-center lg:gap-2.5 gap-2 font-medium md:text-sm text-xs !leading-[100%]">
                                        Show
                                        <span>
                                            <div className="relative w-12 cursor-pointer">
                                                <div className="flex items-center bg-[#A40A86] cursor-pointer min-w-[59px] justify-center gap-1 rounded-md">
                                                    <select value={itemsPerPage} onChange={handlePerPageChange} className="bg-[#A40A86] py-2 px-2 relative z-10 outline-none text-white rounded-sm cursor-pointer appearance-none">
                                                        <option value="2">2</option>
                                                        <option value="4">4</option>
                                                        <option value="6">6</option>
                                                        <option value="8">8</option>
                                                        <option value="10">10</option>
                                                    </select>
                                                    <div className="-ml-2">
                                                        <Image src="/assets/images/svg/chevron-down.svg" alt="arrow-down-icon" width={16} height={16} />
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
                                        <p className="ml-2.5"> Enter per page</p>
                                    </h4>
                                    <input type="text" onChange={(e) => {
                                        setSearch(e.target.value);
                                        setCurrentPage(1);
                                    }}
                                        placeholder="Find" className="text-black md:mt-0 mt-4 placeholder:text-black lg:text-sm text-xs lg:px-4 px-3 lg:py-[11px] py-2 rounded-full outline-none max-w-xs w-full border-1 border-black/20" />
                                </div>
                            </div>

                            <div className="overflow-x-auto scrollbar-hidden">
                                <table className="min-w-full">
                                    <thead className="bg-[#4F02FE] text-white">
                                        <tr>
                                            {["Code", "Name", "Domains", "Country", "Page"].map((title, index) => (
                                                <th key={index} className="lg:px-[15px] p-3 text-left text-xs font-medium uppercase tracking-wider whitespace-nowrap">
                                                    <div className="flex items-center justify-between">
                                                        {title}
                                                        <Image src="/assets/images/svg/up-down-icon.svg" alt="sort-icon" width={20} height={20} />
                                                    </div>
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white">
                                        {paginatedData.map((row, index) => (
                                            <tr key={index} className="hover:bg-[#CD0CA714] transition-all ease-linear duration-300">
                                                <td className="lg:px-[15px] px-3 lg:py-3 py-2.5 text-xs font-medium text-black/70 whitespace-nowrap min-w-20">{row.alpha_two_code}</td>
                                                <td className="lg:px-[15px] px-3 lg:py-3 py-2.5 text-xs font-medium text-black/70 whitespace-nowrap">{row.name}</td>
                                                <td className="lg:px-[15px] px-3 lg:py-3 py-2.5 text-xs font-medium text-black/70 whitespace-nowrap">{row.domains}</td>
                                                <td className="lg:px-[15px] px-3 lg:py-3 py-2.5 text-xs font-medium text-black/70 whitespace-nowrap">{row.country}</td>
                                                <td className="lg:px-[15px] px-3 lg:py-3 py-2.5 text-xs font-medium text-black/70 whitespace-nowrap flex justify-between items-center w-full">
                                                    <Link href={`${row.web_pages}`} target="_blank" className="text-black/70 hover:text-black transition-all ease-linear duration-300 cursor-pointer flex gap-1 pe-6">
                                                        {row.web_pages}
                                                        <Image src="/assets/images/svg/arrow-up.svg" alt="arrow-icon" width={16} height={16} />
                                                    </Link>
                                                    <span className="delete-icon cursor-pointer transition-all ease-linear duration-300" onClick={() => handleDelete(row.web_pages)}>
                                                        <DeleteIcon />
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="flex items-center lg:justify-end justify-center space-x-2 lg:mt-[33px] mt-7">
                            <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1} className="bg-white text-light-gray cursor-pointer rounded-lg px-1 lg:py-2 py-1 font-semibold lg:text-[13px] text-xs flex items-center justify-center hover:text-fade-black transition-all ease-linear duration-300">
                                Prev
                            </button>
                            {Array.from({ length: totalPages }, (_, i) => (
                                <button key={i} onClick={() => setCurrentPage(i + 1)} className={`lg:px-3 px-2.5 lg:py-2 py-1.5 rounded-lg !leading-[100%] xl:min-w-8 xl:max-w-8 xl:min-h-8 justify-center flex items-center font-semibold lg:text-[13px] text-xs  ${currentPage === i + 1 ? "bg-gradient-blue !text-white" : "bg-white text-fade-black text-gray-500 hover:bg-gray-200"}`}> {i + 1}
                                </button>
                            ))}
                            <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} className="bg-white text-light-gray cursor-pointer rounded-lg px-1 lg:py-2 py-1 font-semibold lg:text-[13px] text-xs flex items-center justify-center hover:text-fade-black transition-all ease-linear duration-300">
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
