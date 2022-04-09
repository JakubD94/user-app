import React from "react";
import { SearchIcon } from "@heroicons/react/outline";
import classes from "./UsersSearch.module.css";

const UsersSearch = (props) => {
	// const handleSearch = (e) => {
	// 	props.onUserSearch(e.target.value);
	// };

	return (
		<div className={classes["search-bar__container"]}>
			<label htmlFor="search">
				<SearchIcon className={classes.icon} />
			</label>
			<input
				id="search"
				type="text"
				className={classes["searech-bar"]}
				onChange={props.onChange}
				value={props.value}
			/>
		</div>
	);
};

export default UsersSearch;
