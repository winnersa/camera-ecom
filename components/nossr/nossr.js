import dynamic from 'next/dynamic';

const Nossr = ({ children }) => <>{children}</>;

export default dynamic(() => Promise.resolve(Nossr), {
    ssr: false,
});