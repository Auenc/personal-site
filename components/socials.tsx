import Icon from "./icon";

export interface SocialsProps {
  twitter?: string;
  youtube?: string;
  github?: string;
  linkedin?: string;
  email?: string;
}

const Socials = ({
  twitter,
  youtube,
  github,
  linkedin,
  email,
}: SocialsProps) => {
  return (
    <div className="flex flex-1 content-center justify-start gap-2">
      {twitter && (
        <a href={twitter}>
          <Icon name="twitter" />
        </a>
      )}
      {youtube && (
        <a href={youtube}>
          <Icon name="youtube" />
        </a>
      )}
      {github && (
        <a href={github}>
          <Icon name="github" />
        </a>
      )}
      {linkedin && (
        <a href={linkedin}>
          <Icon name="linkedin" />
        </a>
      )}
      {email && (
        <a href={email}>
          <Icon name="mail" />
        </a>
      )}
    </div>
  );
};

export default Socials;
