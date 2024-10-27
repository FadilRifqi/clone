import Footer from '../../Components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';

export default function Login({ response }) {
  return (
    <>
      <main className="flex justify-center items-center min-h-[95vh]">
        <div className="container mx-auto p-4 flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-1/2 flex justify-center items-center mb-4 md:mb-0">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="w-16 h-16 md:w-[400px] md:h-[400px] fill-current"
            >
              <g>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </g>
            </svg>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center ">
            <p className="text-[4rem] font-bold">Sedang trend saat ini</p>
            <p className="text-[2rem] font-bold">Bergabunglah sekarang</p>
            <button className="bg-gray-800 text-white w-2/5 py-2 px-4 rounded-full mb-2 hover:bg-gray-600">
              Daftar dengan Google{' '}
              <FontAwesomeIcon icon={faGoogle} className="" />
            </button>
            <button className="bg-gray-800 text-white w-2/5 py-2 px-4 rounded-full mb-2 hover:bg-gray-600">
              <FontAwesomeIcon icon={faApple} className="" /> Daftar dengan
              Apple
            </button>
            <p className="mb-2">
              <div class="flex items-center space-x-5">
                <div class="border-t border-gray-500 w-28"></div>
                <div class="">atau</div>
                <div class="border-t border-gray-500 w-28"></div>
              </div>
            </p>
            <button className="bg-blue-500 text-white w-2/5 py-2 px-4 rounded-full mb-2 hover:bg-blue-600">
              Buat Akun
            </button>
            <div className="w-5/12 mb-16">
              <p className="text-[0.7rem] leading-3">
                Dengan mendaftar Anda menyetujui Persyaratan Layanan dan
                Kebijakan Privasi, termasuk Penggunaan Kuki.
              </p>
            </div>
            <p className="font-medium text-[1rem] mb-4">Sudah punya akun?</p>
            <button className="w-2/5 py-2 px-4 rounded-full mb-2 border-2 border-gray-700     bg-white">
              Masuk
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
