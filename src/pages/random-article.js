import { useEffect } from 'react';
import { navigate } from 'gatsby';

export default function RandomArticle({ location }) {
    // React hydration allows this to happen:
    // The slugs are passed in as a piece of state, React hydration creates the component on the client side, and the useEffect() can be leveraged.
    const randomArticleSlug = location.state.slugs[Math.round(Math.random(0, location.state.slugs.length - 1))];

    useEffect(() => {
        navigate(`/articles/${ randomArticleSlug }`);
    }, [randomArticleSlug])

    return null;
}