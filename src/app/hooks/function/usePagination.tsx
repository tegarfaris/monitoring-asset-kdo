import {
    Button,
    Center,
    Flex,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Skeleton,
    Text,
  } from "@chakra-ui/react";
  import { first, last } from "lodash";
  import React from "react";
import { BsArrowDown, BsArrowLeft, BsArrowRight } from "react-icons/bs";
  
  const DOTS = "...";
  
  const usePagination = ({
    totalCount = 0,
    currentCount = 0,
    siblingCount = 1,
    isLoading = false,
  }: {
    totalCount: number;
    currentCount: number;
    siblingCount?: number;
    isLoading?: boolean;
  }) => {
    const [pageSize, setPageSize] = React.useState<number>(10);
    const [currentPage, setCurrentPage] = React.useState<number>(1);
  
    const range = React.useCallback((start: number, end: number) => {
      const length = end - start + 1;
      return Array.from({ length }, (_, idx) => idx + start);
    }, []);
  
    const paginationRange = React.useMemo(() => {
      const totalPageCount = Math.ceil(totalCount / pageSize);
      const totalPageNumbers = siblingCount + 5;
  
      if (totalPageNumbers >= totalPageCount) {
        return range(1, totalPageCount);
      }
  
      const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
      const rightSiblingIndex = Math.min(
        currentPage + siblingCount,
        totalPageCount
      );
  
      const shouldShowLeftDots = leftSiblingIndex > 2;
      const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;
  
      const firstPageIndex = 1;
      const lastPageIndex = totalPageCount;
  
      if (!shouldShowLeftDots && shouldShowRightDots) {
        const leftItemCount = 3 + 2 * siblingCount;
        const leftRange = range(1, leftItemCount);
  
        return [...leftRange, DOTS, totalPageCount];
      }
  
      if (shouldShowLeftDots && !shouldShowRightDots) {
        const rightItemCount = 3 + 2 * siblingCount;
        const rightRange = range(
          totalPageCount - rightItemCount + 1,
          totalPageCount
        );
        return [firstPageIndex, DOTS, ...rightRange];
      }
  
      if (shouldShowLeftDots && shouldShowRightDots) {
        const middleRange = range(leftSiblingIndex, rightSiblingIndex);
        return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
      }
    }, [totalCount, pageSize, siblingCount, currentPage, range]);
  
    const handleSizeNumber = (size: number) => {
      setPageSize(size);
      setCurrentPage(1);
    };
    const renderPageNumber = React.useMemo(
      () =>
        isLoading ? (
          <Skeleton height="30px" />
        ) : (
          <Flex
            gap="20px"
            alignItems="center"
            w="full"
            justifyContent="space-between"
          >
            <Text as="div">
              Showing {currentCount} data from {totalCount} data | Show {pageSize}{" "}
              data per page
              <Menu autoSelect={false}>
                <MenuButton
                  as={Button}
                  size="sm"
                  mx="4px"
                  variant="outline"
                  bg="white"
                  h="32px"
                  w="32px"
                  p="0"
                >
                  <Center>
                    <BsArrowDown size="18px" />
                  </Center>
                </MenuButton>
                <MenuList px="10px">
                  {[5, 10, 20].map((size) => (
                    <MenuItem
                      my="4px"
                      key={size}
                      onClick={() => handleSizeNumber(size)}
                      borderRadius="8px"
                      bg={size === pageSize ? "monika-primary.500" : "white"}
                      color={size === pageSize ? "white" : ""}
                      _hover={{
                        bg:
                          size === pageSize
                            ? "monika-primary.500"
                            : "monika-background-light.third",
                      }}
                    >
                      {size}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
            </Text>
            <Flex gap="20px">
              <Center
                w="32px"
                h="32px"
                p="0"
                size="sm"
                as={Button}
                bg="white"
                variant="outline"
                isDisabled={currentPage === first(paginationRange)}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                <BsArrowLeft size="18px" />
              </Center>
  
              <Flex gap="5px">
                {paginationRange?.map((page, idx) => {
                  if (page === DOTS) {
                    return (
                      <Flex alignSelf="flex-end" mx="2px" key={idx}>
                        &#8230;
                      </Flex>
                    );
                  }
  
                  return (
                    <Center
                      w="32px"
                      h="32px"
                      as={Button}
                      variant="outline"
                      p="0"
                      bg="white"
                      size="sm"
                      colorScheme={page === currentPage ? "monika-primary" : "gray"}
                      onClick={() => setCurrentPage(Number(page))}
                      key={idx}
                    >
                      {page}
                    </Center>
                  );
                })}
              </Flex>
  
              <Center
                w="32px"
                h="32px"
                p="0"
                size="sm"
                as={Button}
                bg="white"
                variant="outline"
                isDisabled={currentPage === last(paginationRange)}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                <BsArrowRight size="18px" />
              </Center>
            </Flex>
          </Flex>
        ),
      [
        currentCount,
        totalCount,
        pageSize,
        paginationRange,
        currentPage,
        setCurrentPage,
        isLoading,
      ]
    );
  
    return {
      pageSize,
      setPageSize,
      currentPage,
      setCurrentPage,
      renderPageNumber,
    };
  };
  
  export default usePagination;
  