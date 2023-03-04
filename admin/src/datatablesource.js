export const userColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  // {
  //   field: "user",
  //   headerName: "User",
  //   width: 230,
  //   renderCell: (params) => {
  //     return (
  //       <div className="cellWithImg">
  //         <img className="cellImg" src={params.row.img} alt="avatar" />
  //         {params.row.username}
  //       </div>
  //     );
  //   },
  // },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "firstName",
    headerName: "firstName",
    width: 100,
  },
  {
    field: "lastName",
    headerName: "lastName",
    width: 100,
  },
  {
    field: "mobile",
    headerName: "mobile",
    width: 100,
  }
];



export const hotelColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "photos",
    headerName: "photos",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.photos[0]} alt="avatar" />
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: "name",
    headerName: "name",
    width: 230,
  },

  {
    field: "city",
    headerName: "city",
    width: 230,
  },


  {
    field: "desc",
    headerName: "desc",
    width: 100,
  },
  {
    field: "cheapestPrice",
    headerName: "cheapestPrice",
    width: 100,
  },
  {
    field: "maxPeople",
    headerName: "maxPeople",
    width: 100,
  }
];


export const roomColumns = [
  { field: "id", headerName: "ID", width: 70 },
  // {
  //   field: "user",
  //   headerName: "User",
  //   width: 230,
  //   renderCell: (params) => {
  //     return (
  //       <div className="cellWithImg">
  //         <img className="cellImg" src={params.row.img} alt="avatar" />
  //         {params.row.username}
  //       </div>
  //     );
  //   },
  // },
  {
    field: "title",
    headerName: "title",
    width: 230,
  },

  {
    field: "price",
    headerName: "price",
    width: 230,
  },


  {
    field: "maxPeople",
    headerName: "maxPeople",
    width: 100,
  },
  {
    field: "desc",
    headerName: "desc",
    width: 230,
  },
];