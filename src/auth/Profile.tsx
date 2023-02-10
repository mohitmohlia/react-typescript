export type ProfilerProps = {
  name: string;
};

function Profile({ name }: ProfilerProps) {
  return <div>This is profile Component {name}</div>;
}

export default Profile;
