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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-card">
              <CardContent className="p-8">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="mb-4 inline-flex p-4 rounded-full bg-primary/10 text-primary">
                      <Send size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">
                      Mensagem Enviada!
                    </h3>
                    <p className="text-muted-foreground">
                      Obrigado pelo contato. Retornaremos em breve.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        Nome *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        className={errors.name ? "border-destructive" : ""}
                        placeholder="Seu nome completo"
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? "border-destructive" : ""}
                        placeholder="seu@email.com"
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* TELEFONE OPCIONAL */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-2"
                      >
                        Telefone (opcional)
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="WhatsApp para contato (opcional)"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2"
                      >
                        Mensagem *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className={`min-h-[150px] ${
                          errors.message ? "border-destructive" : ""
                        }`}
                        placeholder="Conte-nos sobre seu projeto..."
                      />
                      {errors.message && (
                        <p className="text-sm text-destructive mt-1">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 group"
                    >
                      Enviar Mensagem
                      <Send
                        className="ml-2 group-hover:translate-x-1 transition-transform"
                        size={18}
                      />
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Usaremos seu telefone apenas para retorno sobre este
                      contato.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <Card className="bg-card hover:border-primary/50 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="mb-3 inline-flex p-3 rounded-lg bg-primary/10 text-primary">
                  <Mail size={24} />
                </div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-sm text-muted-foreground">
                  contato@digimig.com.br
                </p>
                <p className="text-sm text-muted-foreground">
                  Retorno por e-mail em até 24h
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card hover:border-primary/50 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="mb-3 inline-flex p-3 rounded-lg bg-primary/10 text-primary">
                  <MessageSquare size={24} />
                </div>
                <h3 className="font-semibold mb-1">WhatsApp</h3>
                <p className="text-sm text-muted-foreground">
                  Canal em implantação
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
