import { getProviders, signIn, signOut, useSession } from "next-auth/react"
import Image from "next/image";
import Header from "../../components/Header";
import facebook from "../../assets/facebook1.png";
import { useRouter } from "next/router";



export default function SignIn({ providers }) {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <Header className='bg-white' />
          <div className="flex flex-col items-center mt-12">
            <div className="w-48 h-48">
              <Image src={facebook} onClick={() => router.push("/")} className='cursor-pointer' />
            </div>
            <div className="mt-8 bg-blue-500 hover:bg-blue-500/75 rounded-full p-3">
              <button
                className="text-white"
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              >
                Sign in with {provider.name}
              </button>
            </div>
            {session ?
              <div className="mt-8 bg-blue-500 hover:bg-blue-500/75 rounded-full p-3">
                <button
                  className="text-white"
                  onClick={() => signOut(provider.id, { callbackUrl: "/" })}
                >
                  Log Out {provider.name}
                </button>
              </div>
              :
              ''
            }
          </div>
        </div>
      ))}
    </>
  )
}

export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}