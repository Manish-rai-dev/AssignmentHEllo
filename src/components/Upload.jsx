import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import { createColumnHelper } from "@tanstack/react-table";
import {
    flexRender,
    getCoreRowModel,
    useReactTable,
    getSortedRowModel,
  } from "@tanstack/react-table";
// import { Button, Img, Text } from "components";
// import Button from "../components/Button/Button";
// import Img from "../components/Img/Img";
// import Text from "../components/Text/Text"
import PropTypes from "prop-types";


const ReactTable = ({
    columns,
    data = [],
    rowClass = "",
    headerClass = "",
    enableSorting = false,
    headerProps = {},
    bodyProps = {},
    rowDataProps = {},
  }) => {
    const tableConfig = {
      columns,
      data,
      getCoreRowModel: getCoreRowModel(),
    };
    if (enableSorting) {
      tableConfig["getSortedRowModel"] = getSortedRowModel();
    }
    const table = useReactTable(tableConfig);
  
    // Render the UI for your table
    return (
      <table>
        <thead {...headerProps}>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr className={headerClass} key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...bodyProps}>
          {table.getRowModel().rows.map((row) => (
            <tr className={rowClass} key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export { ReactTable };

const shapes = { round: "rounded" };
const variants = {
  fill: {
    white_A700_01: "bg-white-A700_01 text-gray-900",
    indigo_A200: "bg-indigo-A200 text-white-A700_01",
  },
};
const sizes = { xs: "p-1", sm: "p-4" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "xs",
  variant = "fill",
  color = "indigo_A200",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["white_A700_01", "indigo_A200"]),
};

export { Button };



const Img = ({
    className,
    src = "defaultNoData.png",
    alt = "testImg",
    ...restProps
  }) => {
    return (
      <img
        className={className}
        src={src}
        alt={alt}
        {...restProps}
        loading={"lazy"}
      />
    );
  };
  export { Img };

  const sizeClasses = {
    txtMontserratBold16: "font-bold font-montserrat",
    txtNunitoSemiBold16: "font-nunito font-semibold",
    txtFigtreeRegular14BlueA20001: "font-figtree font-normal",
    txtMontserratBold36: "font-bold font-montserrat",
    txtNunitoSemiBold24: "font-nunito font-semibold",
    txtFigtreeRegular14Gray900: "font-figtree font-normal",
    txtLatoRegular16Gray600: "font-lato font-normal",
    txtFigtreeRegular14: "font-figtree font-normal",
    txtNunitoSemiBold16Gray500: "font-nunito font-semibold",
    txtLatoRegular16: "font-lato font-normal",
    txtFigtreeRegular16: "font-figtree font-normal",
    txtNunitoSemiBold16Black90087: "font-nunito font-semibold",
    txtFigtreeSemiBold14Gray900: "font-figtree font-semibold",
    txtLatoRegular16Blue700: "font-lato font-normal",
    txtMontserratRegular12: "font-montserrat font-normal",
    txtFigtreeSemiBold24: "font-figtree font-semibold",
    txtFigtreeSemiBold14: "font-figtree font-semibold",
    txtMontserratBold72: "font-bold font-montserrat",
  };

  
  const Text = ({ children, className = "", size, as, ...restProps }) => {
    const Component = as || "p";
  
    return (
      <Component
        className={`text-left ${className} ${size && sizeClasses[size]}`}
        {...restProps}
      >
        {children}
      </Component>
    );
  };
  
  export { Text };

const Upload = () => {
    const tableData = React.useRef([
        {
          datatype: "01",
          datatypeOne: "www.google.com",
          datatypeTwo: "prefixsample",
          datatypeThree: "Select Tags",
          datatypeFour: "TAG 4",
        },
        {
          datatype: "02",
          datatypeOne: "www.google.com",
          datatypeTwo: "prefixsample",
          datatypeThree: "Select Tags",
          datatypeFour: "TAG 2",
        },
        {
          datatype: "03",
          datatypeOne: "www.google.com",
          datatypeTwo: "prefixsample",
          datatypeThree: "Select Tags",
          datatypeFour: "TAG 4",
        },
        {
          datatype: "05",
          datatypeOne: "www.google.com",
          datatypeTwo: "prefixsample",
          datatypeThree: "Select Tags",
          datatypeFour: "TAG 3",
        },
      ]);
      const tableColumns = React.useMemo(() => {
        const tableColumnHelper = createColumnHelper();
        return [
          tableColumnHelper.accessor("datatype", {
            cell: (info) => (
              <Text
                className="pb-[29px] pl-4 pt-[34px] text-gray-900 text-sm"
                size="txtFigtreeRegular14Gray900"
              >
                {info?.getValue()}
              </Text>
            ),
            header: (info) => (
              <Text
                className="min-w-[125px] pl-[15px] pt-[17px] text-gray-900 text-sm"
                size="txtFigtreeSemiBold14Gray900"
              >
                Sl No.
              </Text>
            ),
          }),
          tableColumnHelper.accessor("datatypeOne", {
            cell: (info) => (
              <Text
                className="pb-[26px] pt-[35px] text-blue-A200_01 text-sm underline"
                size="txtFigtreeRegular14BlueA20001"
              >
                {info?.getValue()}
              </Text>
            ),
            header: (info) => (
              <Text
                className="min-w-[212px] pt-[17px] text-gray-900 text-sm"
                size="txtFigtreeSemiBold14Gray900"
              >
                Links
              </Text>
            ),
          }),
          tableColumnHelper.accessor("datatypeTwo", {
            cell: (info) => (
              <Text
                className="pb-[27px] pt-[35px] text-gray-900 text-sm"
                size="txtFigtreeRegular14Gray900"
              >
                {info?.getValue()}
              </Text>
            ),
            header: (info) => (
              <Text
                className="min-w-[177px] pl-[5px] pt-[17px] text-gray-900 text-sm"
                size="txtFigtreeSemiBold14Gray900"
              >
                Prefix
              </Text>
            ),
          }),
          tableColumnHelper.accessor("datatypeThree", {
            cell: (info) => (
              <div className="flex flex-row items-center justify-center sm:pr-5 pr-[21px] py-[21px]">
                <Button
                  className="border border-gray-100_01 border-solid cursor-pointer flex items-center justify-center min-w-[150px] mr-12 mt-1.5 rounded-lg"
                  rightIcon={
                    <div className="h-6 ml-2 w-6 rounded-lg">
                      <Img
                        className="h-6 rounded-lg"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    </div>
                  }
                  color="white_A700_01"
                >
                  <div className="text-left text-sm">{info?.getValue()}</div>
                </Button>
              </div>
            ),
            header: (info) => (
              <Text
                className="min-w-[219px] pl-2.5 pt-[19px] text-center text-gray-900 text-sm"
                size="txtFigtreeSemiBold14Gray900"
              >
                Add Tags
              </Text>
            ),
          }),
          tableColumnHelper.accessor("datatypeFour", {
            cell: (info) => (
              <div className="flex flex-row gap-2 items-start justify-start p-0.5">
                <Button
                  className="cursor-pointer flex items-center justify-center mb-[23px] min-w-[60px] mt-[29px]"
                  rightIcon={
                    <Img
                      className="h-4 ml-1"
                      src="images/img_close.svg"
                      alt="close"
                    />
                  }
                  shape="round"
                >
                  <div className="font-semibold text-[10px] text-center tracking-[0.50px] uppercase">
                    TAG 1
                  </div>
                </Button>
                <Button
                  className="cursor-pointer flex items-center justify-center mb-[23px] min-w-[62px] mt-[29px]"
                  rightIcon={
                    <Img
                      className="h-4 ml-1"
                      src="images/img_close.svg"
                      alt="close"
                    />
                  }
                  shape="round"
                >
                  <div className="font-semibold text-[10px] text-center tracking-[0.50px] uppercase">
                    TAG 2
                  </div>
                </Button>
                <Button
                  className="cursor-pointer flex items-center justify-center mb-[23px] min-w-[62px] mt-[29px]"
                  rightIcon={
                    <Img
                      className="h-4 ml-1"
                      src="images/img_close.svg"
                      alt="close"
                    />
                  }
                  shape="round"
                >
                  <div className="font-semibold text-[10px] text-center tracking-[0.50px] uppercase">
                    TAG 3
                  </div>
                </Button>
                <Button
                  className="cursor-pointer flex items-center justify-center mb-[23px] min-w-[62px] mt-[29px]"
                  rightIcon={
                    <Img
                      className="h-4 ml-1"
                      src="images/img_close.svg"
                      alt="close"
                    />
                  }
                  shape="round"
                >
                  <div className="font-semibold text-[10px] text-center tracking-[0.50px] uppercase">
                    {info?.getValue()}
                  </div>
                </Button>
              </div>
            ),
            header: (info) => (
              <Text
                className="min-w-[301px] pt-[19px] text-gray-900 text-sm"
                size="txtFigtreeSemiBold14Gray900"
              >
                Selected Tags
              </Text>
            ),
          }),
        ];
      }, []);
    const navigate =useNavigate();
  return (
    <div>

    <div className="flex md:flex-1 flex-col font-figtree md:gap-10 gap-[104px] items-center justify-start md:mt-0 mt-[49px] w-[83%] md:w-full">
    <div className="flex flex-col md:gap-10 gap-[137px] items-center justify-start w-full">
      <div className="flex md:flex-col flex-row gap-[34px] items-start justify-between w-full">
        <div className="flex md:flex-1 flex-col items-start justify-center w-auto md:w-full">
          <div className="flex flex-col items-center justify-start max-w-[1052px] w-full">
            <div className="flex flex-col items-start justify-start w-auto">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                size="txtFigtreeSemiBold24"
              >
                Upload CSV
              </Text>
            </div>
          </div>
        </div>
        <div className="flex md:flex-1 flex-row gap-[27px] items-center justify-between md:mt-0 mt-0.5 w-[7%] md:w-full">
          <Img
            className="h-[23px]"
            src="images/img_vector.svg"
            alt="vector"
          />
          <div className="flex flex-col h-[30px] items-center justify-start w-[30px]">
            <Img
              className="h-[30px] md:h-auto rounded-[50%] w-[30px]"
              src="images/img_image1.png"
              alt="imageOne"
            />
          </div>
        </div>
      </div>
      <div className="bg-white-A700_01 flex flex-col gap-[21px] items-center justify-start p-4 rounded-lg w-[52%] md:w-full">
        <div className="border border-dashed border-gray-200_01 flex flex-col items-center justify-end p-[84px] md:px-10 sm:px-5 rounded-lg w-full">
          <div className="flex flex-col items-center justify-start mt-3.5 w-[68%] md:w-full">
            <div className="flex flex-col gap-4 items-center justify-start w-auto">
              <Img
                className="h-9 w-9"
                src="images/img_television_36x36.svg"
                alt="television_One"
              />
              <Text
                className="text-base text-center text-gray-500_01 w-auto"
                size="txtFigtreeRegular16"
              >
                <span className="text-gray-500_01 font-figtree font-normal">
                  Drop your excel sheet here or{" "}
                </span>
                <span className="text-indigo-A200 font-figtree font-normal">
                  browse
                </span>
              </Text>
            </div>
          </div>
        </div>
        <div className="bg-indigo-A200_7e flex flex-row gap-2 h-14 md:h-auto items-center justify-center pl-2 pr-4 py-2 rounded-lg w-[564px] sm:w-full">
          <Img
            className="h-6 w-6"
            src="images/img_twitter.svg"
            alt="twitter"
          />
          <Text
            className="text-sm text-white-A700_01 w-auto"
            size="txtFigtreeSemiBold14"
          >
            Upload
          </Text>
        </div>
      </div>
    </div>
    <div className="flex flex-col gap-[46px] items-start justify-start w-[92%] md:w-full">
      <div className="flex flex-col items-start justify-start w-auto">
        <Text
          className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
          size="txtFigtreeSemiBold24"
        >
          Uploads
        </Text>
      </div>
      <div className="h-[455px] sm:h-[551px] md:h-[786px] relative w-full">
        <div className="absolute bg-gray-100 flex flex-col inset-x-[0] items-center justify-start mx-auto pb-[15px] px-[15px] rounded-lg top-[0] w-full">
          <div className="overflow-auto w-full">
            <ReactTable
              columns={tableColumns}
              data={tableData.current}
              rowClass={""}
              headerClass=""
            />
          </div>
          <div className="flex flex-col items-center justify-start mb-[73px] w-full">
            <div className="bg-white-A700_01 flex md:flex-col flex-row md:gap-10 items-center justify-between p-[13px] rounded-lg w-full">
              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[3px] w-6">
                <Text
                  className="text-gray-900 text-sm"
                  size="txtFigtreeRegular14Gray900"
                >
                  04
                </Text>
              </div>
              <Text
                className="text-blue-A200_01 text-sm underline"
                size="txtFigtreeRegular14BlueA20001"
              >
                www.google.com
              </Text>
              <Text
                className="text-gray-900 text-sm"
                size="txtFigtreeRegular14Gray900"
              >
                prefixsample
              </Text>
              <div className="bg-white-A700_01 border border-gray-100_01 border-solid flex flex-row gap-2 h-8 md:h-auto items-center justify-center p-3 rounded-lg w-[150px]">
                <Text
                  className="text-gray-900 text-sm w-auto"
                  size="txtFigtreeRegular14Gray900"
                >
                  Select Tags
                </Text>
                <Img
                  className="h-6 rounded-lg w-6"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown_One"
                />
              </div>
              <div className="flex flex-col items-start justify-start mr-4 w-[270px]">
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[60px]"
                  rightIcon={
                    <Img
                      className="h-4 ml-1"
                      src="images/img_close.svg"
                      alt="close"
                    />
                  }
                  shape="round"
                >
                  <div className="font-semibold text-[10px] text-center tracking-[0.50px] uppercase">
                    TAG 1
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-white-A700_01 bottom-[0] flex flex-col h-[205px] md:h-auto items-center justify-end p-2 right-[36%] rounded-[12px] shadow-bs w-[150px]">
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex flex-col gap-1 items-start justify-start w-full">
              <Text
                className="bg-gray-100 justify-center pb-[9px] pl-2 sm:pr-5 pr-[35px] pt-[13px] rounded-lg text-gray-900 text-sm w-full"
                size="txtFigtreeRegular14Gray900"
              >
                Tag 1
              </Text>
              <Text
                className="bg-white-A700_01 justify-center pb-2.5 pl-2 sm:pr-5 pr-[35px] pt-[13px] rounded-lg text-gray-900 text-sm w-full"
                size="txtFigtreeRegular14Gray900"
              >
                Tag 2
              </Text>
              <Text
                className="bg-white-A700_01 justify-center pb-2.5 pl-2 sm:pr-5 pr-[35px] pt-[13px] rounded-lg text-gray-900 text-sm w-full"
                size="txtFigtreeRegular14Gray900"
              >
                Tag 3
              </Text>
              <Text
                className="bg-white-A700_01 justify-center pb-[9px] pl-2 sm:pr-5 pr-[35px] pt-[13px] rounded-lg text-gray-900 text-sm w-full"
                size="txtFigtreeRegular14Gray900"
              >
                Tag 4
              </Text>
              <div className="bg-white-A700_01 flex flex-col items-center sm:items-start justify-start p-2 rounded-lg w-full">
                <Text
                  className="text-gray-900 text-sm w-auto"
                  size="txtFigtreeRegular14Gray900"
                >
                  Tag 5
                </Text>
              </div>
              <Text
                className="bg-white-A700_01 justify-center pt-2 px-2 text-gray-900 text-sm w-full"
                size="txtFigtreeRegular14Gray900"
              >
                Tag 9
              </Text>
              <Text
                className="bg-white-A700_01 justify-center pt-2 px-2 text-gray-900 text-sm w-full"
                size="txtFigtreeRegular14Gray900"
              >
                Tag 10
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
      
    </div>
  )
}

export default Upload
