import { createSignal, onCleanup } from "solid-js";
import { supabase } from "./supabase";

export default function Početna() {
  const [user, setUser] = createSignal(null);
  const [isDropdownOpen, setIsDropdownOpen] = createSignal(false);

 
  supabase.auth.getUser().then(({ data }) => setUser(data?.user));

  
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen());
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4">
      <header className="flex justify-between items-center p-4 shadow-md bg-white dark:bg-gray-800">
        <h1 className="text-2xl font-bold">🎓 Obrazovna igra</h1>
        <div className="relative">
          {user() ? (
            <div>
         
              <button
                id="dropdownHoverButton"
                onClick={toggleDropdown}
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                {user().email}
                <svg
                  class="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              {isDropdownOpen() && (
                <div
                  id="dropdownHover"
                  class="z-10 absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700"
                >
                  <ul
                    class="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownHoverButton"
                  >
                    <li>
                      <button
                        class="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={handleSignOut}
                      >
                        Odjavi se
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <a
              href="/Registracija"
              class="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              Prijava / Registracija
            </a>
          )}
        </div>
      </header>
      <main className="flex flex-col items-center justify-center mt-10">
        <h1 className="text-4xl font-bold">🎓 Dobrodošli na stranicu za kvizove</h1>
        <p className="mt-2 text-lg text-center max-w-xl">
          Testirajte svoje znanje iz različitih predmeta i naučite nešto novo!
        </p>
        <button class="mt-6 px-6 py-3 bg-blue-500 text-white text-lg rounded-lg hover:bg-blue-600 transition">
          📝 Započni kviz
        </button>
      </main>
    </div>
  );
}
