import api from "./api";

export const tasksService = {
  async getAll() {
    const { data } = await api.get("/tasks");
    return data.data;
  },

  async create(payload) {
    const { data } = await api.post("/tasks", payload);
    return data.data;
  },

  async update(id, payload) {
    const { data } = await api.put(`/tasks/${id}`, payload);
    return data.data;
  },

  async remove(id) {
    await api.delete(`/tasks/${id}`);
  },

  async complete(id) {
    const { data } = await api.patch(`/tasks/${id}/complete`);
    return data.data;
  },
};
