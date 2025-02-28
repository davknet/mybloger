import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "@inertiajs/react";
import './min-dropdown.css';

const MiniDropDown = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {

        axios.get("/api/categories").then((response) => {
            setCategories(response.data);
        });

    }, []);

    console.log(categories) ;

    return (
        <>
            <ul className="min-dropdown" id="mini-dropdown-01">

                {categories.length > 0 ? (
                    categories.map((category) => (
                        <li key={category.id} className="mini-list-item">
                            <Link href={`/categories/${category.slug}`} className="mini-link">
                                {category.name}
                            </Link>
                        </li>
                    ))
                ) : (
                    <li className="mini-list-item">Loading...</li>
                )}
            </ul>
        </>
    );
};

export default MiniDropDown;
