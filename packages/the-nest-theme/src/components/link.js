import { connect, useConnect } from "frontity";
import Link from "@frontity/components/link";

/**
 * The TheNestLink component, which is a wrapper on top of the {@link Link}
 * component.
 *
 * @param props - It accepts the same props than the {@link Link} component.
 *
 * @example
 * ```js
 * <TheNestLink link="/some-post">
 *   <div>Some Post</div>
 * </TheNestLink>
 * ```
 *
 * @returns A {@link Link} component, which returns an HTML anchor element.
 */
const TheNestLink = ({ children, ...props }) => {
  const { state, actions } = useConnect();

  /**
   * A handler that closes the mobile menu when a link is clicked.
   */
  const onClick = () => {
    if (state.theme.isMobileMenuOpen) {
      actions.theme.closeMobileMenu();
    }
  };

  return (
    <Link {...props} onClick={onClick}>
      {children}
    </Link>
  );
};

export default connect(TheNestLink, { injectProps: false });
