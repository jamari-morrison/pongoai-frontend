import { makeStyles } from '@fluentui/react-make-styles';

type UserIconProps = {
  /**
   * The userName of the user to generate an icon for.
   */
  userName: string;
};

const stringToColor = (string: string) => {
  let hash = 0;

  for (let i = 0; i < string.length; i++) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';
  for (let i = 0; i < 3; i++) {
    const colorValue = (hash >> (i * 8)) & 0xff;
    color += ('00' + colorValue.toString(16)).substr(-2);
  }
  return color;
};

const useStyles = makeStyles({
  icon: {
    position: 'relative',
    width: '28px',
    height: '28px',
    fontSize: '16px',
    border: '2px solid rgba(0, 0, 0, .2)',
    color: 'white',
    borderRadius: '100%',
    display: 'flex',
    verticalAlign: 'middle',
    userSelect: 'none',
    flexShrink: 0,
    flexGrow: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const UserIcon = (props: UserIconProps) => {
  const { userName } = props;
  const splitName = userName.split(' ');
  const styles = useStyles();
  const color = stringToColor(userName);
  const backgroundStyles = { background: color };
  let initials = '';

  for (let i = 0; i < (splitName.length <= 2 ? splitName.length : 2); i++) {
    initials += splitName[i].charAt(0);
  }

  return (
    <div className={styles.icon} style={backgroundStyles}>
      {initials}
    </div>
  );
};
