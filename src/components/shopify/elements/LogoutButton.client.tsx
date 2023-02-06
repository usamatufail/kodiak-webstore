interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
}

export function LogoutButton(props: ButtonProps) {
  const logout = () => {
    fetch('/account/logout', { method: 'POST' }).then(() => {
      if (typeof props?.onClick === 'function') {
        props.onClick();
      }
      window.location.href = '/';
    });
  };

  return (
    <button className="text-black rounded bg-gray-200 py-3 px-5" {...props} onClick={logout}>
      Logout
    </button>
  );
}
