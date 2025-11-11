'use client'

import React from 'react'

/**
 * FormularioRegistro (STUB temporal)
 * - Sustituye temporalmente la versión completa que crea usuarios con service_role.
 * - Muestra un mensaje informativo en lugar de ejecutar llamadas a Supabase.
 * - Permite que el build/deploy continúe sin depender de claves sensibles ni calls admin.
 */

export default function FormularioRegistro() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-semibold mb-4">Registro temporalmente deshabilitado</h1>
        <p className="text-sm text-gray-600">
          La creación de cuentas está desactivada en este despliegue. 
          Si eres administrador y necesitas habilitar el registro, contacta con el equipo.
        </p>
        <div className="mt-6 text-xs text-gray-400">
          (Componente sustituido temporalmente para permitir despliegues públicos)
        </div>
      </div>
    </div>
  )
}
