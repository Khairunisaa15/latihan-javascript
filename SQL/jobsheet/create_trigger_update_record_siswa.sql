use sekolah;

DELIMITER $$
CREATE TRIGGER trg_siswa_after_update
AFTER UPDATE ON siswa
FOR EACH ROW
BEGIN
INSERT INTO log_siswa (aksi, nis, nama_lama, nama_baru, tgl)
VALUES ('UPDATE', NEW.nis, OLD.nama, NEW.nama, now());
END $$
DELIMITER ;