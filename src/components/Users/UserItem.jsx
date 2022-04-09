import React from "react";

import classes from "./UserItem.module.css";

const UserItem = (props) => {
	const name = `${props.title} ${props.firstName} ${props.lastName}`;

	return (
		<li
			className={`${classes["user-item"]} ${
				props.title === "Ms" ? classes["blue-bgd"] : ""
			}`}
		>
			<div className={classes["user-img__wrapper"]}>
				<img className={classes["user-img"]} src={props.src} />
			</div>
			<div className={classes["user-info"]}>
				<h2 className={classes["user-name"]}>{name}</h2>
				<p className={classes["user-city"]}>{props.city}</p>
				<p className={classes["user-email"]}>{props.email}</p>
			</div>
		</li>
	);
};

export default UserItem;
