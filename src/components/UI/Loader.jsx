import React from "react";
import classes from "./Loader.module.css";

const Loader = (props) => {
	return (
		<div className={classes["loader__wrapper"]}>
			<h2 className={classes.loader}>{props.children}</h2>
		</div>
	);
};

export default Loader;
