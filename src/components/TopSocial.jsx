import { FaInstagram, FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa6";

export default function TopSocial(props) {
  return (
    <div className="border-l border-l-silver-chalice px-2">
      {props.social === 'Facebook' ? 
        <a href={props.socialurl}><FaFacebookF /></a> : 
        props.social === 'Instagram' ?
          <a href={props.socialurl}><FaInstagram /></a> :
          props.social === 'LinkedIn' ?
            <a href={props.socialurl}><FaLinkedin /></a> :
            props.social === 'Twitter' ?
              <a href={props.socialurl}><FaTwitter /></a> :
              null
      }
    </div>
  );
}
