// KNU_SEMINAR/src/components/FilterBar.js
import React from "react";
import "./style.css";

const FilterBar = () => {
    return (
        <div classname = "filterbar">
            <div classname = "filter-day">
                <div className="filter-day-head">요일</div>
                <div className="filter-day-list">
                    <div className="d-mon">월</div>
                    <div className="d-tue">화</div>
                    <div className="d-wed">수</div>
                    <div className="d-thu">목</div>
                    <div className="d-fri">금</div>
                    <div className="d-sat">토</div>
                    <div className="d-sun">일</div>
                </div>
            </div>

            <div classname = "filter-time">
                <div className="filter-time-head">시간</div>
                <div className="filter-time-list">
                    <div className="t-9-10">9-10</div>
                    <div className="t-10-11">10-11</div>
                    <div className="t-11-12">11-12</div>
                    <div className="t-12-1">12-1</div>
                    <div className="t-1-2">1-2</div>
                    <div className="t-2-3">2-3</div>
                    <div className="t-3-4">3-4</div>
                    <div className="t-4-5">4-5</div>
                    <div className="t-5-6">5-6</div>
                    <div className="t-6-">6시 이후</div>
                </div>
            </div>

            <div classname = "filter-place">
                <div className="filter-place-head">장소</div>
                <div className="filter-place-list">
                    <div className="p-it">IT대</div>
                    <div className="p-global">글로벌 플라자</div>
                    <div className="p-gyeong">경상대</div>
                    <div className="p-engineering">공대</div>
                </div>
            </div>

            <div classname = "filter-category">
                <div className="filter-category-head">카테고리</div>
                <div className="filter-category-list">
                    <div className="c-9-10">진로/취업</div>
                    <div className="c-10-11">4차 산업</div>
                    <div className="c-11-12">교양</div>
                    <div className="c-12-1">멘토링</div>
                    <div className="c-1-2">경진대회</div>
                    <div className="c-2-3">네트워킹</div>
                    <div className="c-3-4">창업</div>
                    <div className="c-4-5">전공심화</div>
                    <div className="c-5-6">국제교류</div>
                </div>
            </div>

            <div classname = "filter-else">
                <div className="filter-else-head">기타</div>
                <div className="filter-else-list">
                    <div className="e-eat">식사 제공</div>
                    <div className="e-application">사전 신청</div>
                    <div className="e-free">무료</div>
                    <div className="e-charged">유료</div>
                </div>
            </div>
        </div>
    );
};

export default FilterBar;
