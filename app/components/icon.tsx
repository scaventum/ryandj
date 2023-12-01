import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  IconName,
  IconPrefix,
  SizeProp,
  library,
} from "@fortawesome/fontawesome-svg-core";

// add fa icons to library
library.add(fas, fab);

// proptypes
type Props = {
  name: string;
  style?: string;
  size?: string;
};

// export
export default function Icon({ name, style = "fas", size = "md" }: Props) {
  // helpers
  const iconStyle: IconPrefix = (style ?? "fas") as IconPrefix;
  const iconName: IconName = name as IconName;
  const iconSize: SizeProp = size as SizeProp;

  // component
  return <FontAwesomeIcon icon={[iconStyle, iconName]} size={iconSize} />;
}
