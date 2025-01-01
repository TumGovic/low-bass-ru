import Link from 'next/link';
import { Button } from "@nextui-org/react";
import { FaYoutube, FaTelegramPlane } from 'react-icons/fa';
import {router} from "next/client";

export default function Home() {
    return (
        <>
            <section className="w-full h-screen relative">
                <div className="w-full h-screen">
                    <video
                        className="w-screen h-full object-cover"
                        style={{objectPosition: "center"}}
                        src="https://pub-45245d3a2dee49b78de346984b5903c9.r2.dev/subwoofer.mp4"
                        muted
                        autoPlay
                        loop
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/90 to-black"/>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <h1 className="text-white text-6xl font-bold mb-1">Low-Bass</h1>
                    <span className="text-white max-w-[75vh] text-center">
                        Источник эксклюзивных Low Bass обработок популярных треков. Мы предлагаем высококачественные обработки с усиленными низкими частотами для настоящих ценителей глубокого баса.
                    </span>
                    <Button color="primary" className="mt-2" onClick={() => router.push('https://play.low-bass.ru')}>Попробовать</Button>
                </div>
            </section>

            <section className="w-full relative py-12 bg-black text-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-12 text-center">Преимущества</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-[#000] rounded-3xl p-8">
                            <h3 className="text-sm font-medium text-gray-400 mb-2">LOSSLESS КАЧЕСТВО</h3>
                            <h4 className="text-xl font-bold mb-4">Безупречное звучание</h4>
                            <p className="text-gray-400">Аудио без сжатия и потерь, сохраняющее все детали оригинальной записи.</p>
                        </div>
                        <div className="bg-[#000] rounded-3xl p-8">
                            <h3 className="text-sm font-medium text-gray-400 mb-2">БЕЗ CLIP</h3>
                            <h4 className="text-xl font-bold mb-4">Никаких искажений</h4>
                            <p className="text-gray-400">Динамический диапазон звука не ограничен, что предотвращает &#34;обрезание&#34; пиков.</p>
                        </div>
                        <div className="bg-[#000] rounded-3xl p-8">
                            <h3 className="text-sm font-medium text-gray-400 mb-2">ЦЕНА = КАЧЕСТВО</h3>
                            <h4 className="text-xl font-bold mb-4">Лучшее предложение</h4>
                            <p className="text-gray-400">Превосходное качество звука по доступной цене.</p>
                        </div>
                        <div className="bg-[#000] rounded-3xl p-8">
                            <h3 className="text-sm font-medium text-gray-400 mb-2">НАДЁЖНЫЕ ПЛАГИНЫ</h3>
                            <h4 className="text-xl font-bold mb-4">Профессиональные инструменты</h4>
                            <p className="text-gray-400">Только проверенные плагины от ведущих производителей для тонкой настройки звука.</p>
                        </div>
                    </div>
                    <div className="mt-8 flex justify-center">
                        <div className="bg-[#000] rounded-3xl p-8 max-w-md">
                            <h3 className="text-sm font-medium text-gray-400 mb-2">ПОСЛЕДНЕЕ API ПЛЕЕРА</h3>
                            <h4 className="text-xl font-bold mb-4">Максимальная совместимость</h4>
                            <p className="text-gray-400">Использование новейшего API гарантирует качественное воспроизведение на любых устройствах.</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="h-[25vh] flex items-center bg-black">
                <div className="w-full flex justify-around items-center">
                    <div className="flex flex-col items-center">
                        <Link href="https://t.me/OfficialLowBass" className="text-white hover:text-gray-300">
                            <FaTelegramPlane size={48}/>
                        </Link>
                        <span className="text-white mt-2">Telegram</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Link href="https://www.youtube.com/@lowbassru" className="text-white hover:text-gray-300">
                            <FaYoutube size={48}/>
                        </Link>
                        <span className="text-white mt-2">YouTube</span>
                    </div>
                </div>
            </div>
        </>
    );
}
