import User from "../components/user";
function UserList({ users }) {
  return (
    <>
      <h1>User List Page</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <User user={user} />
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

  return {
    props: {
      users: data,
    },
  };
}
