export const Faq = () => {
  return (
    <article>
      <h2>Frequently Asked Questions</h2>
      <ul>
        <li>
          Vision: Created with one thing in mind: making it easier to store and
          share recipes. We want a platform where users can freely enjoy sharing
          what they've created, as well as having a place to manage everything
          they need, without wasting resources and removing the mess. Never
          waste time again trying to copy a recipe for a friend, and free up
          some shelf space while you're at it!
        </li>
        <li>
          Price: Our platform is currently free with no paid versions and does
          not plan any paid tier plans in the upcoming future. Please enjoy!
        </li>
        <li>
          User Data: We value your data and use it in the most minimal ways,
          while utilizing secure Login with Auth0. The only user information
          that we store is your "nickname" we use to set authors for recipes. No
          passwords or sensitive data is stored on our database. For more
          information on Auth0 visit:{" "}
          <a target="_blank" rel="noreferrer" href="https://auth0.com/">
            https://auth0.com/
          </a>
          .
        </li>
        <li>
          Upcoming Features: We plan to add recipe review capability so that
          users can have a curation of feedback and can better decipher what is
          worthwhile to make when browsing other recipes. Feel free to leave us
          some feedback if there are certain features you'd like to have at your
          disposal.
        </li>
      </ul>
    </article>
  );
};
