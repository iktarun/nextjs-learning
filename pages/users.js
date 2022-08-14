function UserList({ users }) {
  console.log("users:", users);
  return (
    <>
      <h1>User List Page</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.id} - {user.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default UserList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await response.json();

  //   console.log(data);
  return {
    props: {
      users: data,
    },
  };
}
