"use client";

import type React from "react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send } from "lucide-react";
import { motion } from "framer-motion";

export function ContactPageContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    operationalConsent: false, // ✅ OBRIGATÓRIO
    marketingConsent: false, // ✅ OPCIONAL
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Mensagem é obrigatória";
    }

    if (!formData.operationalConsent) {
      newErrors.operationalConsent =
        "Você precisa aceitar o recebimento de mensagens operacionais";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", formData);

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        operationalConsent: false,
        marketingConsent: false,
      });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Entre em Contato
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty">
            Vamos conversar sobre seu projeto e transformar suas ideias em
            realidade
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-card">
            <CardContent className="p-8">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="mb-4 inline-flex p-4 rounded-full bg-primary/10 text-primary">
                    <Send size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Mensagem Enviada!</h3>
                  <p className="text-muted-foreground">
                    Obrigado pelo contato. Retornaremos em breve.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Nome */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Nome *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive mt-1">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Telefone */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Telefone (opcional)
                    </label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Mensagem */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Mensagem *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={`min-h-[150px] ${
                        errors.message ? "border-destructive" : ""
                      }`}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* ✅ CONSENTIMENTO OBRIGATÓRIO */}
                  <div>
                    <div className="flex items-start gap-2">
                      <input
                        type="checkbox"
                        checked={formData.operationalConsent}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            operationalConsent: e.target.checked,
                          }))
                        }
                        className="mt-1"
                      />
                      <label className="text-xs text-muted-foreground leading-relaxed">
                        Aceito receber mensagens operacionais relacionadas a
                        este contato, como confirmações, avisos e retorno por
                        e-mail ou WhatsApp. *
                      </label>
                    </div>
                    {errors.operationalConsent && (
                      <p className="text-xs text-destructive">
                        {errors.operationalConsent}
                      </p>
                    )}
                  </div>

                  {/* ✅ CONSENTIMENTO OPCIONAL */}
                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      checked={formData.marketingConsent}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          marketingConsent: e.target.checked,
                        }))
                      }
                      className="mt-1"
                    />
                    <label className="text-xs text-muted-foreground leading-relaxed">
                      Aceito receber comunicações promocionais, ofertas,
                      novidades e conteúdos de marketing da DigiMig. (opcional)
                    </label>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Enviar Mensagem
                    <Send className="ml-2" size={18} />
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-6 text-center">
                <Mail className="mx-auto mb-2" />
                <p className="text-sm">contato@digimig.com.br</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <MessageSquare className="mx-auto mb-2" />
                <p className="text-sm">WhatsApp em implantação</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
