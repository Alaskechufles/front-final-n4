import { Dropdown } from "flowbite-react";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Enlaces() {
  const [enlace, setEnlace] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/enlaces")
      .then((response) => {
        setEnlace(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div>
      <script src="../node_modules/flowbite/dist/flowbite.min.js"></script>
      <main className="h-screen bg-[#C6D2D2] flex flex-row">
        <div className="w-[350px] h-screen bg-[#222D32]">
          <div className="flex flex-row justify-center items-center gap-4 p-4">
            <h1 className="text-[#C6D2D2] text-[26px]">Administración</h1>
          </div>
          <hr />

          <hr />
          <div className="">
            <div className="w-full">
              <h2 className="text-center text-[#C6D2D2] text-[22px] pt-7">
                General y Seguridad
              </h2>
            </div>
            <div className="p-6 flex flex-col gap-5">
              <a
                href="/parametros"
                className="text-[#C6D2D2] text-[22px] flex gap-4 justify-start items-center hover:bg-[#1a5086] h-[50px] pl-5 rounded-lg"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-person-fill-gear"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Zm9.886-3.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382l.045-.148ZM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
                  </svg>
                </div>
                <p>Parametros</p>
              </a>
              <a
                href="/roles"
                className="text-[#C6D2D2] text-[22px] flex gap-4 justify-start items-center hover:bg-[#1a5086] h-[50px] pl-5 rounded-lg"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-person-fill-gear"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Zm9.886-3.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382l.045-.148ZM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
                  </svg>
                </div>
                <p>Roles</p>
              </a>
              <a
                href="/usuarios"
                className="text-[#C6D2D2] text-[22px] flex gap-4 justify-start items-center hover:bg-[#1a5086] h-[50px] pl-5 rounded-lg"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-person-workspace"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                    <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z" />
                  </svg>
                </div>
                <p>Usuarios</p>
              </a>
              <a
                href="/bitacoras"
                className="text-[#C6D2D2] text-[22px] flex gap-4 justify-start items-center hover:bg-[#1a5086] h-[50px] pl-5 rounded-lg"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-mortarboard-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z" />
                    <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z" />
                  </svg>
                </div>
                <p>Bitacoras</p>
              </a>
              <a
                href="/enlaces"
                className="text-[#C6D2D2] text-[22px] flex gap-4 justify-start items-center hover:bg-[#1a5086] h-[50px] pl-5 rounded-lg"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-easel2"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 0a.5.5 0 0 1 .447.276L8.81 1h4.69A1.5 1.5 0 0 1 15 2.5V11h.5a.5.5 0 0 1 0 1h-2.86l.845 3.379a.5.5 0 0 1-.97.242L12.11 14H3.89l-.405 1.621a.5.5 0 0 1-.97-.242L3.36 12H.5a.5.5 0 0 1 0-1H1V2.5A1.5 1.5 0 0 1 2.5 1h4.691l.362-.724A.5.5 0 0 1 8 0ZM2 11h12V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5V11Zm9.61 1H4.39l-.25 1h7.72l-.25-1Z"
                    />
                  </svg>
                </div>
                <p>Enlaces</p>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full">
          <nav className="flex flex-row bg-white w-full justify-between p-5">
            <div className="flex flex-row items-center gap-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-list"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </div>
              <h3>Home</h3>
            </div>

            <div>
              {/* <!-- Dropdown menu --> */}
              <Dropdown inline label="Admin">
                <div className=" m-4">
                  <a href="/perfil">My Profile</a>
                </div>
                <div className=" m-4">
                  <a href="/">Logout</a>
                </div>
                <div className=" m-4">
                  <a href="/dashboard">Dashboard</a>
                </div>
              </Dropdown>
            </div>
          </nav>
          <div className="w-full flex flex-row justify-between p-4">
            <h3 className="text-[25px] font-semibold">Dashboard</h3>
            <div>
              <a className="text-[#70A2EE]" href="/adminDashboard.php">
                Home
              </a>{" "}
              /<a href="/dashboard">Dashboard</a>
            </div>
          </div>
          {/*  asd */}
          <div className="bg-white p-4 w-[90%] m-5 rounded-xl shadow-lg text-[#8FA5BD] flex flex-row justify-between items-center">
            <h3>Información de Enlaces</h3>
            <button
              data-modal-target="authentication-modal1"
              data-modal-toggle="authentication-modal1"
              className=" text-white bg-[#007BFF] px-4 py-2 flex justify-center items-center rounded-lg"
            >
              Agregar Nuevo Enlaces
            </button>
            {/* <!-- Main modal --> */}
            <div
              id="authentication-modal1"
              tabIndex="-1"
              aria-hidden="true"
              className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
              <div className="relative w-full max-w-md max-h-full">
                {/* <!-- Modal content --> */}
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <button
                    type="button"
                    className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="authentication-modal1"
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                  <div className="px-6 py-6 lg:px-8">
                    <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                      Agregar Nuevo Enlace
                    </h3>
                    <form
                      className="space-y-6"
                      action="http://127.0.0.1:8000/api/enlaces/create"
                      method="post"
                    >
                      <div className=" flex flex-col gap-3">
                        <label
                          htmlFor="rol_id"
                          className="block  text-sm font-medium text-gray-900 dark:text-white"
                        >
                          ID del Rol
                        </label>
                        <input
                          type="number"
                          name="rol_id"
                          id="rol_id"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          placeholder="ID"
                          required
                        />
                        <label
                          htmlFor="descripcion_enlace"
                          className="block  text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Descripcion
                        </label>
                        <input
                          type="text"
                          name="descripcion_enlace"
                          id="descripcion_enlace"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          placeholder="Descripción"
                          required
                        />
                      </div>

                      <div className=" flex flex-row w-full justify-end gap-5">
                        <button
                          type="button"
                          className="w-[100px] text-white bg-[#6C747E] hover:text-[#6C747E] hover:bg-gray-200 px-5 py-2.5 rounded-lg text-sm ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                          data-modal-hide="authentication-modal1"
                        >
                          Close
                        </button>
                        <button
                          type="submit"
                          className="w-[150px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Crear
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white  p-10 w-[40%] m-10 rounded-xl shadow-lg text-[#8FA5BD]">
            <table className=" table-auto w-full ">
              <thead>
                <tr className=" text-center border-b  border-[#2c7fd2]">
                  <th className=" w-1/12">ID de enlace</th>
                  <th className=" w-1/6">Descripcion</th>
                </tr>
              </thead>
              <tbody>
                {enlace.map((e, index) => (
                  <tr
                    className=" text-center border-b  border-[#2c7fd2]"
                    key={index}
                  >
                    <td className=" w-1/12">{e.id} </td>
                    <td className=" w-1/6">{e.descripcion_enlace} </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* asd */}
        </div>
      </main>
    </div>
  );
}
