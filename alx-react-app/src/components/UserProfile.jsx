const UserProfile = (props) => {
  return (
    <div style={{ 
      border: '1px solid #ddd',
      padding: '20px',
      margin: '20px 0',
      borderRadius: '8px'
    }}>
      <h2 style={{ color: '#2c3e50' }}>{props.name}</h2>
      <p style={{ fontSize: '1.1rem' }}>
        Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span>
      </p>
      <p style={{ fontStyle: 'italic', color: '#7f8c8d' }}>
        Bio: {props.bio}
      </p>
    </div>
  );
};

export default UserProfile;