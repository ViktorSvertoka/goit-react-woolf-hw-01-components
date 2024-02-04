import {
  Wrap,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  ListItem,
  Label,
  Quantity,
} from './Profile.styled';

const Profile = ({ username, tag, location, avatar, stats }) => {
  <Wrap>
    <Description>
      <Avatar src={avatar} alt={username} />
      <Name>{username}</Name>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </Description>

    <Stats>
      <ListItem>
        <Label>Followers</Label>
        <Quantity>{stats.followers}</Quantity>
      </ListItem>
      <ListItem>
        <Label>Views</Label>
        <Quantity>{stats.views}</Quantity>
      </ListItem>
      <ListItem>
        <Label>Likes</Label>
        <Quantity>{stats.likes}</Quantity>
      </ListItem>
    </Stats>
  </Wrap>;
};

export default Profile;
