import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { GameQuery } from "../App";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  gameQuery: GameQuery;
}

function SortSelector({ gameQuery, onSelectSortOrder }: Props) {
  const sortOrders = [
    { value: "", label: "Relavance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const selectedSortOrder = sortOrders.find(
    (sortOrder) => sortOrder.value === gameQuery?.sortOrder
  );

  // const { data, error } = usePlatforms();
  // if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {selectedSortOrder?.label || "Relavance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sortOrder) => (
          <MenuItem
            onClick={() => onSelectSortOrder(sortOrder.value)}
            key={sortOrder.value}
            value={sortOrder.value}
          >
            {sortOrder.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default SortSelector;
