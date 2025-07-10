'use client';

import { platformLabels } from '@/config/site';
import { Platform, Version } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';

interface VersionCardProps {
  version: Version;
  isCompact?: boolean;
}

export function VersionCard({ version, isCompact = false }: VersionCardProps) {
  // Agrupar por plataformas principales
  const platformGroups = {
    windows: [] as [string, Platform][],
    mac: [] as [string, Platform][],
    linux: [] as [string, Platform][]
  };

  // Agrupar plataformas
  Object.entries(version.platforms).forEach(([platform]) => {
    const typedPlatform = platform as Platform;
    if (typedPlatform.startsWith('windows')) {
      platformGroups.windows.push([platformLabels[typedPlatform], typedPlatform]);
    } else if (typedPlatform.startsWith('mac')) {
      platformGroups.mac.push([platformLabels[typedPlatform], typedPlatform]);
    } else if (typedPlatform.startsWith('linux')) {
      platformGroups.linux.push([platformLabels[typedPlatform], typedPlatform]);
    }
  });

  // Manejar evento de clic de descarga
  const handleDownload = (e: React.MouseEvent<HTMLButtonElement>, version: Version, platform: string) => {
    e.preventDefault();
    const downloadUrl = version.platforms[platform].url
    if (downloadUrl) {
      // Crear un enlace oculto y activar el clic
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = ''; // Dejar que el navegador use el nombre de archivo predeterminado
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className={`overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-200 ${isCompact ? '' : 'hover:shadow-md hover:border-indigo-200'}`}>
      <div className="border-b border-gray-200 bg-gradient-to-r from-indigo-50 to-purple-50 px-4 py-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-900">
            Cursor {version.version}
          </h3>
        </div>
      </div>

      <div className="p-4">
        <div className="mb-4 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Plataforma Windows */}
          {platformGroups.windows.length > 0 && (
            <div className="rounded-md border border-gray-200 p-4 transition-all duration-200 hover:border-indigo-200 hover:shadow-sm">
              <h4 className="mb-3 text-xl font-medium text-indigo-900 flex items-center">
                <Image src="/images/Windows.png" alt="Windows" width={50} height={50} className="mr-2" />
                Windows
              </h4>
              <div className="space-y-3">
                {platformGroups.windows.map(([label, platform]) => (
                  <div key={platform} className="border-t border-gray-100 pt-2">
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">{label}</span>
                    </div>
                    <button
                      onClick={(e) => handleDownload(e, version, platform)}
                      className="inline-flex w-full items-center justify-center rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 px-3 py-1.5 text-xm font-medium text-white shadow-sm transition-all duration-150 hover:from-indigo-700 hover:to-purple-700 hover:shadow focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 cursor-pointer"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Descargar
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Plataforma macOS */}
          {platformGroups.mac.length > 0 && (
            <div className="rounded-md border border-gray-200 p-4 transition-all duration-200 hover:border-indigo-200 hover:shadow-sm">
              <h4 className="mb-3 text-xl font-medium text-indigo-900 flex items-center">
                <Image src="/images/macos.png" alt="macOS" width={50} height={50} className="mr-2" />
                macOS</h4>
              <div className="space-y-3">
                {platformGroups.mac.map(([label, platform]) => (
                  <div key={platform} className="border-t border-gray-100 pt-2">
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">{label}</span>
                    </div>
                    <button
                      onClick={(e) => handleDownload(e, version, platform)}
                      className="inline-flex w-full items-center justify-center rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 px-3 py-1.5 text-xm font-medium text-white shadow-sm transition-all duration-150 hover:from-indigo-700 hover:to-purple-700 hover:shadow focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 cursor-pointer"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Descargar
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Plataforma Linux */}
          {platformGroups.linux.length > 0 && (
            <div className="rounded-md border border-gray-200 p-4 transition-all duration-200 hover:border-indigo-200 hover:shadow-sm">
              <h4 className="mb-3 text-xl font-medium text-indigo-900 flex items-center">
                <Image src="/images/linux.png" alt="Linux" width={50} height={50} className="mr-2" />
                Linux</h4>
              <div className="space-y-3">
                {platformGroups.linux.map(([label, platform]) => (
                  <div key={platform} className="border-t border-gray-100 pt-2">
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">{label}</span>
                    </div>
                    <button
                      onClick={(e) => handleDownload(e, version, platform)}
                      className="inline-flex w-full items-center justify-center rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 px-3 py-1.5 text-xm font-medium text-white shadow-sm transition-all duration-150 hover:from-indigo-700 hover:to-purple-700 hover:shadow focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 cursor-pointer"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Descargar
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {!isCompact && (
          <div className="mt-4 flex justify-end">
            <Link prefetch={false}
              href={`/versions/${version.version}`}
              className="text-sm font-medium text-indigo-600 hover:text-purple-600"
            >
              Ver detalles &rarr;
            </Link>
          </div>
        )}
      </div>
    </div>
  );
} 
