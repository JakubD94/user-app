import React, { useState, useEffect, Fragment, useCallback } from "react";
import UserItem from "./UserItem";
import Button from "../UI/Button";
import Loader from "../UI/Loader";
import UsersSearch from "./UsersSearch";

import classes from "./Users.module.css";

const Users = (props) => {
	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [searchedName, setSearchedName] = useState("");

	const changeHandler = (e) => {
		setSearchedName(e.target.value);
	};

	const getUsers = useCallback(async () => {
		try {
			await fetch("https://randomuser.me/api/?results=20")
				.then((res) => res.json())
				.then((data) => setUsers(data.results));
		} catch (err) {
			setIsError(true);
			throw new Error("Something went wrong");
		} finally {
			setIsLoading(false);
		}
	}, []);

	useEffect(() => {
		getUsers();
	}, []);

	const handleLoading = (e) => {
		e.preventDefault();
		setIsLoading(true);
		setIsError(false);
		setSearchedName("");
		getUsers();
	};

	const filteredUsers = users.filter((item) => {
		const name = `${item.name.title} ${item.name.first} ${item.name.last}`;
		return name.toLowerCase().includes(searchedName.toLowerCase());
	});

	return (
		<Fragment>
			<UsersSearch onChange={changeHandler} value={searchedName} />
			{isLoading && <Loader>Loading...</Loader>}
			{!isLoading && !isError && filteredUsers.length > 0 && (
				<ul className={classes.users}>
					{filteredUsers.map((user) => (
						<UserItem
							key={user.id.value || Math.random().toString()}
							title={user.name.title}
							firstName={user.name.first}
							lastName={user.name.last}
							src={user.picture.large}
							email={user.email}
							city={user.location.city}
						/>
					))}
				</ul>
			)}
			{searchedName && filteredUsers.length === 0 && (
				<Loader>No results for '{searchedName}'</Loader>
			)}
			{isError && <Loader>Something went wrong</Loader>}
			<div className={classes["btn__wrapper"]}>
				<Button onClick={handleLoading}>
					{isError ? "Retry" : "New users"}
				</Button>
			</div>
		</Fragment>
	);
};

export default Users;
