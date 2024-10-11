const SocialLink = ({ itemClass, href, text }) => {
  return (
    <li>
      <a href={href} target="_blank" rel="noreferrer" className={itemClass}>
        {text}
      </a>
    </li>
  );
};

export default SocialLink;
