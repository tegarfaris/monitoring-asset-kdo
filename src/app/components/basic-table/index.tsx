import {
    Text,
    LayoutProps,
    Spinner,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    Flex,
    SystemStyleObject,
  } from "@chakra-ui/react";
  import Link from "next/link";
  import React from "react";
  
  export interface ITableColumns {
    key: string;
    title: string;
    width?: LayoutProps["width"];
    capitalize?: boolean;

    render?: (data: any, index?: number) => void;
    renderHeaderProperty?: React.ReactNode;
  }
  
  type DataTable = Record<string, any>;
  
  interface BasicTableProps {
    datas: DataTable[];
    columns: ITableColumns[];
    variant?: "simple" | "striped" | "unstyled";
    size?: "sm" | "md" | "lg";
    colorScheme?: string;
    width?: LayoutProps["width"];
    loadingState?: boolean;
    onHover?: SystemStyleObject;
    linkTo?: string;
  }
  
  const noRecordData = (columns: ITableColumns[]) => {
    return (
      <Tbody>
        <Tr>
          <Td colSpan={columns.length}>No Records</Td>
        </Tr>
      </Tbody>
    );
  };
  
  const RowWithLink: React.FC<{
    children: React.ReactNode;
    dataId: number;
    linkTo: string;
  }> = ({ linkTo, children, dataId }) => {
    return <Link href={`${linkTo}/${dataId}`}>{children}</Link>;
  };
  
  const BasicTable: React.FC<BasicTableProps> = ({
    datas,
    columns,
    variant,
    size = "md",
    width = "fit-content",
    loadingState,
    onHover,
    linkTo,
  }) => {
    return (
      <TableContainer w={width}>
        <Table variant={variant} size={size}>
          {datas.length === 0 && !loadingState && noRecordData(columns)}
          <Thead>
            <Tr>
              {columns?.map((column) => {
                return (
                  <Th
                    fontSize="16px"
                    color="wool-neutral.900"
                    key={column.key}
                    w={column.width || "fit-content"}
                  >
                    <Flex gap="10px" justifyContent="center" alignItems="center" w="full">
                      <Text>{column.title}</Text>
                      {column.renderHeaderProperty}
                    </Flex>
                  </Th>
                );
              })}
            </Tr>
          </Thead>
          <Tbody>
            {typeof loadingState !== "undefined" && loadingState ? (
              <Tr>
                <Td colSpan={columns.length} textAlign="center">
                  <Spinner
                    color="wool-primary.500"
                    thickness="4px"
                    speed="0.65s"
                    size="lg"
                    emptyColor="wool-text.light"
                  />
                </Td>
              </Tr>
            ) : (
              datas.map((data, i: number) => (
                <Tr key={i} _hover={onHover}>
                  {columns.map((column) => (
                    <React.Fragment key={column.key}>
                      {linkTo ? (
                        <RowWithLink dataId={data.id} linkTo={linkTo}>
                          <Td
                            textTransform={
                              column.capitalize ? "capitalize" : "none"
                            }
                            fontSize="14px"
                            w={column.width || "fit-content"}
                          >
                            {column.render
                              ? column.render(data, i)
                              : data[column.key]}
                          </Td>
                        </RowWithLink>
                      ) : (
                        <Td
                          textTransform={
                            column.capitalize ? "capitalize" : "none"
                          }
                          fontSize="14px"
                          w={column.width || "fit-content"}
                        >
                          {column.render
                            ? column.render(data, i)
                            : data[column.key]}
                        </Td>
                      )}
                    </React.Fragment>
                  ))}
                </Tr>
              ))
            )}
          </Tbody>
        </Table>
      </TableContainer>
    );
  };
  
  export default BasicTable;
  