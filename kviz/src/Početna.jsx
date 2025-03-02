import { createSignal } from "solid-js";

import { supabase } from "./supabase";

export default function Početna() {
  const [user, setUser] = createSignal(null);

  supabase.auth.getUser().then(({ data }) => setUser(data?.user));

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <div class="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4">
      <header class="flex justify-between items-center p-4 shadow-md bg-white dark:bg-gray-800">
        <h1 class="text-2xl font-bold">🎓 Obrazovna igra</h1>
        <div class="relative">
          {user() ? (
            <div class="group">
              <button class="px-4 py-2 bg-blue-500 text-white rounded-md">
                {user().email}
              </button>
              <div class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 border rounded-md hidden group-hover:block">
                <button
                  class="block w-full px-4 py-2 text-left hover:bg-gray-200 dark:hover:bg-gray-600"
                  onClick={handleSignOut}
                >
                  Odjavi se
                </button>
              </div>
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
      <main class="flex flex-col items-center justify-center mt-10">
        <h1 class="text-4xl font-bold">🎓 Dobrodošli na quizzies</h1>
        <p class="mt-2 text-lg text-center max-w-xl">
          Testirajte svoje znanje iz različitih predmeta i naučite nešto novo!
        </p>
        <button
          class="mt-6 px-6 py-3 bg-blue-500 text-white text-lg rounded-lg hover:bg-blue-600 transition"
        >
          📝 Započni kviz
        </button>
        <div class="mt-4">
        
        </div>
      </main>
    </div>
  );
}
