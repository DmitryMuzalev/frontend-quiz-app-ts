import { Box } from "../Box/Box";

interface Props {
  icon: string;
  name: string;
}

export const Icon = ({ icon, name }: Props) => (
  <Box theme={name.toLowerCase()}>
    <img src={icon} alt={`icon quiz by theme ${name}`} />
  </Box>
);
